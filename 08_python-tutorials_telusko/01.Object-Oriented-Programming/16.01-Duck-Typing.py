class PyCharm:
    def execute(self):
        print("Compiling")
        print("Running")


class MyCharm:
    def execute(self):
        print("Spell Check")
        print("Convention Check")
        print("Compiling")
        print("Running")


class Laptop:
    def code(self, ide):
        ide.execute()


ide = PyCharm()
ide2 = MyCharm()

lap = Laptop()
lap.code(ide2)
