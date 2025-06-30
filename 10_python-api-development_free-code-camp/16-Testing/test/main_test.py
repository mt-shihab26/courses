from fastapi.testclient import TestClient
from app.main import app

clinet = TestClient(app)


def test_root():
    res = clinet.get("/")
    assert res.json().get("msg") == "Hello from API Root"
    assert res.status_code == 200
