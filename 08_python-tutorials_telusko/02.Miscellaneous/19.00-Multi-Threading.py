from threading import Thread


class Hello(Thread):
    def run(self):
        for i in range(100):
            print("Hello", i)


class Hi(Thread):
    def run(self):
        for i in range(100):
            print("Hi", i)


t1 = Hello()
t2 = Hi()

t1.start()
t2.start()
