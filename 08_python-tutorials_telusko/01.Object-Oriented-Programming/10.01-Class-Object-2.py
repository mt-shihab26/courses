class Computer:
    def config(self):
        print("i5, 8gb, 512gb")


com1 = Computer()
com2 = Computer()

Computer.config(com1)
Computer.config(com2)

com1.config()
com2.config()

a = 5

a.bit_length()
