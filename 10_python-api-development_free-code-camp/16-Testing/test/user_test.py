from jose import jwt
from app.config import settings
from app import schemas
import pytest


def test_user_create(client):
    email = "hello123@gmail.com"
    passwd = "password123"
    res = client.post("/users/", json={"email": email, "password": passwd})
    new_user = schemas.UserOut(**res.json())
    # print(res.json())
    assert new_user.email == email
    assert res.status_code == 201


def test_login_user(client, test_user):
    # print(test_user)
    res = client.post(
        "/login/",
        data={
            "username": test_user["email"],
            "password": test_user["password"]
        }
    )
    login_res = schemas.Token(**res.json())
    payload = jwt.decode(login_res.access_token,
                         settings.secret_key, algorithms=settings.algorithm)
    id = payload.get("user_id")
    assert id == test_user["id"]
    assert login_res.token_type == "bearer"
    assert res.status_code == 200


@pytest.mark.parametrize(
    "email, password, status_code",
    [
        ("wrongeemail@gmail.com", "password123", 403),
        ("hello123@gmail.com", "wrongpassword", 403),
        ("wrongemail@gmail.com", "wrongpassword", 403),
        (None, "password123", 422),
        ("hello123@gmail.com", None, 422)
    ]
)
def test_incorrect_login(client, email, password, status_code):
    res = client.post(
        "/login/",
        data={
            "username": email,
            "password": password
        }
    )
    print(res.json(), res.status_code)
    assert res.status_code == status_code
