from app import schemas
import pytest


def test_get_all_post(authorized_client, test_posts):
    res = authorized_client.get("/posts/")

    def validate(post):
        return schemas.PostOut(**post)
    list(map(validate, res.json()))

    assert len(res.json()) == len(test_posts)
    assert res.status_code == 200


def test_unauthorized_get_all_post(client, test_posts):
    res = client.get("/posts/")

    assert res.status_code == 401
    assert len(res.json()) != len(test_posts)


def test_get_one_post(authorized_client, test_posts):
    res = authorized_client.get(f"/posts/{test_posts[0].id}")
    posts = schemas.PostOut(**res.json())

    assert res.status_code == 200
    assert posts.Post.id == test_posts[0].id


def test_unauthorized_get_one_post(client, test_posts):
    res = client.get(f"/posts/{test_posts[0].id}")

    assert res.status_code == 401


def test_get_one_post_not_exist(authorized_client):
    res = authorized_client.get(f"posts/{99999991234234}")

    assert res.status_code == 404


@pytest.mark.parametrize(
    "title, content, published",
    [
        ("awesome new title", "awesome new content", True),
        ("favorite pizza", "I love pepperoni", False),
        ("tallest skyscrapers", "wahoo", True)
    ]
)
def test_create_post(authorized_client, test_user, test_posts, title, content, published):
    res = authorized_client.post(
        "/posts/",
        json={
            "title": title,
            "content": content,
            "published": published
        }
    )
    created_post = schemas.Post(**res.json())

    assert res.status_code == 201
    assert created_post.title == title
    assert created_post.content == content
    assert created_post.published == published
    assert created_post.owner_id == test_user["id"]


def test_create_default_published_true(authorized_client, test_user, test_posts):
    res = authorized_client.post(
        "/posts/",
        json={
            "title": "random title",
            "content": "random content",
        }
    )
    created_post = schemas.Post(**res.json())

    assert res.status_code == 201
    assert created_post.title == "random title"
    assert created_post.content == "random content"
    assert created_post.published == True
    assert created_post.owner_id == test_user["id"]


def test_unauthorized_create_post(client, test_posts):
    res = client.post(
        "/posts/",
        json={
            "title": "something title",
            "content": "something content"
        }
    )

    assert res.status_code == 401


def test_unauthorized_user_delete_post(client, test_posts):
    res = client.delete(f"/posts/{test_posts[0].id}")

    assert res.status_code == 401


def test_delete_post_success(authorized_client, test_posts):
    res = authorized_client.delete(f"/posts/{test_posts[0].id}")

    assert res.status_code == 204


def test_delete_post_non_exist(authorized_client, test_posts):
    res = authorized_client.delete(f"/posts/3422494174")

    assert res.status_code == 404


def test_delete_other_user_post(authorized_client, test_posts):
    res = authorized_client.delete(f"/posts/{test_posts[-1].id}")

    assert res.status_code == 403


def test_update_post(authorized_client, test_posts):
    data = {
        "title": "updated title",
        "content": "updated content",
        "published": False
    }
    res = authorized_client.put(f"/posts/{test_posts[0].id}", json=data)
    update_post = schemas.Post(**res.json())

    assert res.status_code == 200
    assert update_post.title == data.get("title")


def test_update_other_user_post(authorized_client, test_posts):
    data = {
        "title": "updated title",
        "content": "updated content",
        "published": False
    }
    res = authorized_client.put(f"/posts/{test_posts[-1].id}", json=data)
    assert res.status_code == 403


def test_authorized_update_post(client, test_posts):
    data = {
        "title": "updated title",
        "content": "updated content",
        "published": False
    }
    res = client.put(f"/posts/{test_posts[0].id}", json=data)

    assert res.status_code == 401


def test_update_post_doesnt_exits(authorized_client, test_posts):
    data = {
        "title": "updated title",
        "content": "updated content",
        "published": False
    }
    res = authorized_client.put(f"/posts/{23423444}", json=data)

    assert res.status_code == 404
