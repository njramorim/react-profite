export function passActive(quant, direction, max, element) {
	let active = element.state.activeIndex
	if(direction === 'left'){
  	active > 0 && active <= (max - 1) ? element.setState({
			activeIndex: ( active + quant)
    }) : element.setState({
			activeIndex: (max - 1)
    })

  }else {
  	active >= 0 && active < (max - 1) ? element.setState({
			activeIndex: ( active + quant)
    }) : element.setState({
			activeIndex: 0
    })
  }
}
