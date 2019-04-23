import React from 'react';

import StockTitle from './title.jsx';
import Shares from './shares.jsx';
import Pricing from './pricing.jsx';
import EstimatedCost from './estimatedCost.jsx';
import CheckBox from './checkBox.jsx';
import ReviewOrder from './reviewOrder.jsx';
import BuyingPower from './buyingPower.jsx';
import DropDownInput from './dropDownInput.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode : 'Market Order',
            shares: 'none',
            price: 0,
            currentStock: '',
        };
        
    }

    componentDidMount() {
        var url = window.location.pathname
        var appThis = this;
        fetch(`/api${url}`)
        .then(response => {
            return response.json();
        })
        .then(result => {
            appThis.setState({
                price : result[0].price,
                currentStock: result[0].ticker
            })
        })
    }

    changeMode(event) {
        console.log('trim', event.target.textContent.trim())
        this.setState({
            mode : event.target.textContent.trim()
        }
        )
        
    }

    handleShares(e) {
        var val = e.target.value;
        console.log(e.target.value === '');
        if(e.target.value === '' || e.target.value === '0') {
            console.log('okk')
            val = 'none';
        }
        this.setState({
           shares : val
        }, () => {console.log(this.state.shares)})
    }

    render() {
        var midContent;
        console.log(this.state.mode)
        if(this.state.mode === 'Market Order') {
            midContent = 
            (
            <div className='app_buySell_orderInfo'>
                                
                <Shares handleChange={this.handleShares.bind(this)}/>
                <Pricing price={this.state.price}/>
                <EstimatedCost price={this.state.price} handleCost={this.state.shares}/>              
            </div>
            )
        } else if(this.state.mode === 'Limit Order') {

            midContent = (
                <div>
                    <Shares title='Limit Price' placeHolder={'$0.00'} />
                    <Shares handleChange={this.handleShares.bind(this)}/>
                    <DropDownInput />
                    <Pricing />
                    <EstimatedCost price={this.state.price} handleCost={this.state.shares} />
                </div>
            )
            

        } else if(this.state.mode === 'Stop Loss Order') {
            midContent = (
                <div>
                    <Shares title='Stop Price' placeHolder={'$0.00'}/>
                    <Shares handleChange={this.handleShares.bind(this)}/>
                    <DropDownInput />
                    <EstimatedCost price={this.state.price} handleCost={this.state.shares} />
                </div>
            )
        } else {
            midContent = (
                <div>
                    <Shares title='Stop Price' placeHolder={'$0.00'}/>
                    <Shares handleChange={this.handleShares.bind(this)}/>
                    <DropDownInput />
                    <EstimatedCost price={this.state.price} handleCost={this.state.shares} />
                </div>
            )
        }
        return (
            <form className='app_buySell_orderForm'>
               <div className='app_buySell_cardHeader'>
                   <StockTitle currentStock={this.state.currentStock} changeMode={this.changeMode.bind(this)}/>
               </div> 
               {midContent}
               <CheckBox />
               <ReviewOrder price={this.state.price} sharesNum={this.state.shares}/>
               <BuyingPower />
        
            </form>
        )
    }
}

export default App;