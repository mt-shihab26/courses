class A:
    def show(self):
        print("in A show")


class B(A):
    def show(self):
        print("in B show")


var = A()
var.show()

var2 = B()
var2.show()

