import React, {Component}    from 'react'
import ReactDOM  from 'react-dom'
import Header from './containers/header'
import Highlights from './containers/highlights'
import Gallery from './containers/gallery'
import Footer from './containers/footer'

class App extends Component {
	render() {
    return <main>
    	<Header />
    	<Highlights>
    		section 1
    	</Highlights>
    	<Gallery>
    		section 2
    	</Gallery>
    	<Footer />
    </main>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))