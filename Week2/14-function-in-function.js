function foo(bar) {
        bar();
    }
    
    function bar() {
        console.log('Hello, I am bar!');
    }
    
    foo(bar);