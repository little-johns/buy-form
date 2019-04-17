import React from 'react';
import BuyType from './buyType.jsx';

class StockTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownOn : false,
        }
    }

    render() {
        return (
            <header className='title_buySell_section'>
                <div className='title_buySell_title'>
                    Buy {this.props.currentStock}
                </div>
                    <BuyType changeMode={this.props.changeMode}/>
            </header>
        );
    }
};

export default StockTitle;

{/* <BuyType clickHandler={this.props.clickHandler.bind(this)}/> */}