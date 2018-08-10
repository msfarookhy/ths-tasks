function foo() {
    console.log(this.a)

}
 var obj ={
    a:2,
 };
foo.apply(obj)

//wht use this
// .callhow to count
// lexical scoping
// obejects
// different type of assecing the function in this window
// this functio alwats prefare the lexical scope
// what is call stack
// what is call site
// default bininding
// difernace between let and var
// impliciting binding obj.foo()
// explicitn binding foo.call( obj );
// new binding
// Q what is the differance btween apply n call n binding ?
// different variation
// function prototypes/object proto types
// creating a new object in OOP
