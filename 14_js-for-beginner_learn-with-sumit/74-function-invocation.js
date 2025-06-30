function func() {
    console.log("This is a funtion");
    console.log(this);
}

func();

const obj = {
    fnc() {
        console.log(this);
    }
}

obj.fnc();