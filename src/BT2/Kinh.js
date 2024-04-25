import React, { Component, Fragment } from 'react'

export default class Kinh extends Component {

    state = {
        imgURL: "./img/v1.png"
    }
    changeGlass = (number) => {
        this.setState({imgURL: `./img/v${number}.png`})
    }

    render() {
        return (
            <Fragment>
                <header className='header'>
                    <h3>LỰA CHỌN CẶP KÍNH</h3>
                </header>
                <section className='banner'>
                    <div className='container'>
                        <div className='banner_img'>
                            <img src={this.state.imgURL} alt="" />
                            <img src="./img/model.jpg" alt="" />
                        </div>
                        <div className='banner_item'>
                            <p>CÁC MẪU KÍNH MẮT</p>
                            <div className='banner_item_kinh row'>
                                <img src="./img/v1.png" alt="kinh" className='col-3' onClick={() => { this.changeGlass("1")}}/>
                                <img src="./img/v2.png" alt="kinh" className='col-3' onClick={() => { this.changeGlass("2")}}/>
                                <img src="./img/v3.png" alt="kinh" className='col-3' onClick={() => { this.changeGlass("3")}}/>
                                <img src="./img/v4.png" alt="kinh" className='col-3' onClick={() => { this.changeGlass("4")}}/>
                                <img src="./img/v5.png" alt="kinh" className='col-3' onClick={() => { this.changeGlass("5")}}/>
                                <img src="./img/v6.png" alt="kinh" className='col-3' onClick={() => { this.changeGlass("6")}}/>
                                <img src="./img/v7.png" alt="kinh" className='col-3' onClick={() => { this.changeGlass("7")}}/>
                                <img src="./img/v8.png" alt="kinh" className='col-3' onClick={() => { this.changeGlass("8")}}/>

                            </div>

                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
