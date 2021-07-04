import * as React from 'react'
import { Link } from 'gatsby'

const Layout = (props) => {
    return (
        <main>
            <nav>
                <Link to='/'>Just Green Living</Link>
                <Link to='/'>Create</Link>
                <Link to='/'>Connect</Link>
                <Link to='/'>Inspire</Link>
            </nav>
        </main>
    )
}

export default Layout