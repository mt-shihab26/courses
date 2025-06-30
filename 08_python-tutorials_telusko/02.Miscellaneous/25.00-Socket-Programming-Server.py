import socket

server = socket.socket()
print("Socket Created")

server.bind(("127.0.0.1", 9999))

server.listen(3)
print("Waiting for connections")

while True:
    client, address = server.accept()
    name = client.recv(1024).decode()
    print("Connect with", address, name)

    client.send(bytes(f"Welcome to {name}", "utf-8"))

    client.close()
