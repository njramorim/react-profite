import React, {Component} from 'react'

export default class Footer extends Component {
	render () {
		return <footer>
			<div>
				<dl className="rj">
					<dt>RJ</dt>
					<dd>
						<p>
							Rua do acre, 77 - sala 1108<br />
							Centro - Rio de Janeiro<br />
							<a href="tel: +55 (21) 2263 6044">
								tel.: +55 (21) 2263.6044
							</a>
						</p>	
					</dd>
				</dl>

				<dl className="sp">
					<dt>SP</dt>
					<dd>
						<p>
							Rua Cardoso de melo, 1750<br />
							6º Andar Vila Olímpia<br />
							<a href="tel: +55 (21) 2263 6044">
								tel.: +55 (21) 2263.6044
							</a>
						</p>	
					</dd>
				</dl>

				<nav>
					<ul>
						<li className="contato">
							<a href="#home">Entre em <span>contato</span></a>
						</li>
						<li className="consultor">
							<a href="#home">Fale com o nosso<br/><span>consultor online</span></a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	}
}