import React from 'react'
import NavbarClass from './NavbarClass'

class NavbarClassTwo extends NavbarClass {
    render() {
        let html = super.render()
        return (
            <>
                {html}
                {this.testHTML()}
                <h1>This is a Navbar TWO Class Component</h1>
            </>
        )
    }
}

export default NavbarClassTwo