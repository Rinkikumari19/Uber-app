import React, { Component } from 'react'

export default class Uber_instruction extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            message:'π',
            amout1:0,
            amout2:0,
            amout3:0,
            amout4:0
        }
    }
    
    riderFunc (){
        this.setState({
            message :' π©βπ¦° Rinki, Huskur π',
            btn:<button className='rendersBtn' onClick={()=>this.r1Func()}>R1</button>,
            message1 :' π§ Archana, electronic cityπ',
            btn1:<button className='rendersBtn' onClick={()=>this.r2Func()}>R2</button>,
            message2:' π±ββοΈ Shikha, Star marketπΊ',
            btn2:<button className='rendersBtn' onClick={()=>this.r3Func()}>R3</button>,
            message3:' πββοΈ Shweta, Shanti pura marketπ',
            btn3:<button className='rendersBtn' onClick={()=>this.r4Func()}>R4</button>
            
        }) 
    }
    r1Func(){
        this.setState({
            render1:'π©βπ¦° Rinki, Huskur π',
            accBtn:<button className='acc' onClick={()=>this.accFuncR()}>Accept</button>,
            rejBtn1:<button className='rej' onClick={()=>this.rejFunc()}>Reject</button>
        })
    }
    r2Func(){
        this.setState({
            render1:'π§ Archna, electronic city π',
            accBtn:<button className='acc' onClick={()=>this.accFuncA()} >Accept</button>,
            rejBtn1:<button  className='rej' onClick={()=>this.rejFunc()}>Reject</button>
        })
    }
    r3Func(){
        this.setState({
            render1:'π±ββοΈ Shikha, Star market πΊ',
            accBtn:<button className='acc' onClick={()=>this.accFuncS()}>Accept</button>,
            rejBtn1:<button className='rej' onClick={()=>this.rejFunc()}>Reject</button>
        })
    }
    r4Func(){
        this.setState({
            render1:'πββοΈ Shweta, Shanti pura market π',
            accBtn:<button className='acc' onClick={()=>this.accFuncSh()} >Accept</button>,
            rejBtn1:<button className='rej' onClick={()=>this.rejFunc()}>Reject</button>
        })
    }
    
    accFuncR(){
        this.setState({
            cab:'π',
            name:"Rider name is Rinki π©βπ¦°",
            venue:'Location is Navgurukul to Huskur',
            time : 'Time = 10 minutes',
            placeInf : '1km=15rs. 2km is there ' +(15*2)+'Rs. ',
            value:'',
            pese:<button className="moneyPay" onClick={()=>this.moneyPayR()}>pay money</button>
           
        })
    }
    accFuncA(){
        this.setState({
            cab:'π',
            name:"Rider name is Archna π§",
            venue:'Location is Navgurukul to Electronic city',
            time : 'Time = 40 minutes',
            placeInf : '1km=15rs. 12km is there ' +(15*12)+'Rs. ',
            value:'',
            pese:<button className="moneyPay" onClick={()=>this.moneyPayA()}>pay money</button>
            
        })
    }
    accFuncS(){
        this.setState({
            cab:'πΊ',
            name:"Rider name is Shikha π±ββοΈ",
            venue:'Location is Navgurukul to Star market',
            time : 'Time = 45 minutes',
            placeInf : '1km=15rs. 14km is there ' +(15*14)+'Rs. ',
            value:'',
            pese:<button className="moneyPay" onClick={()=>this.moneyPayS()}>pay money</button>
            
        })
    }
    accFuncSh(){
        this.setState({
            cab:'π',
            name:"Rider name is Shweta πββοΈ",
            venue:'Location is Navgurukul to Shanti pura market',
            time : 'Time = 30 minutes',
            placeInf : '1km=15rs. 2km is there ' +(15*10)+'Rs. ',
            value:'',
            pese:<button className="moneyPay" onClick={()=>this.moneyPaySh()}>pay money</button>
            
        })
    }

    rejFunc(){
        this.setState({
            value :'Thanks for visit π',
            againR:<button className="againR" onClick={()=>this.againRideFunc()}>againRide</button>
        })
    }

    againRideFunc(){
        this.setState({
            name:"",
            value:"",
            placeInf:"",
            time:"",
            venue:"",
            amout:"",
            symble:"",
            render1:"",
            accBtn:"",
            rejBtn1:"",
            symble:"",
            cab:"",
            pese:"",
            againR:"",
            seeAmout:""
        })
    }

    moneyPayR(){
        this.setState({
            symble:'βοΈ',
            amout:15*2+' Rs.',
            amout1:this.state.amout1+(15*2),
            againR:<button className="againR" onClick={()=>this.againRideFunc()}>againRide</button>,
            seeAmout :<button className="againR" onClick={()=>this.seeMoney()}>SeeAmout</button>
            
        })
    }
    moneyPayA(){
        this.setState({
            amout:15*12+' Rs.',
            amout2:this.state.amout2+(15*12),
            symble:'βοΈ',
            againR:<button className="againR" onClick={()=>this.againRideFunc()}>againRide</button>,
            seeAmout :<button className="againR" onClick={()=>this.seeMoney()}>SeeAmout</button>
        })
    }
    moneyPayS(){
        this.setState({
            amout:15*14+' Rs.',
            amout3:this.state.amout3+(15*14),
            symble:'βοΈ',
            againR:<button className="againR" onClick={()=>this.againRideFunc()}>againRide</button>,
            seeAmout :<button className="againR" onClick={()=>this.seeMoney()}>SeeAmout</button>
        })
    }
    moneyPaySh(){
        this.setState({
            amout4:this.state.amout4+(15*10),
            amout:(15*10)+' Rs.',
            symble:'βοΈ',
            againR:<button className="againR" onClick={()=>this.againRideFunc()}>againRide</button>,
            seeAmout :<button className="againR" onClick={()=>this.seeMoney()}>SeeAmout</button>
        })
    }
    seeMoney(){
        this.setState({
            againR:"Who's rider want to see account money β ",
            r1Acc:<button className='accM' onClick={()=>this.accRinder1()}>R1Acc</button>,
            r2Acc:<button className='accM' onClick={()=>this.accRinder2()}>R2Acc</button>,
            r3Acc:<button className='accM' onClick={()=>this.accRinder3()}>R3Acc</button>,
            r4Acc:<button className='accM' onClick={()=>this.accRinder4()}>R4Acc</button>
        })
    }
    accRinder1(){
        this.setState({
            r1_amount:this.state.amout1
        })
    }
    accRinder2(){
        this.setState({
            r2_amount:this.state.amout2
        })
    }
    accRinder3(){
        this.setState({
            r3_amount:this.state.amout3
        })
    }
    accRinder4(){
        this.setState({
            r4_amount:this.state.amout4
        })
    }
   

    render() {
    
        return (
            <div>
                <div className='heading'>
                    <h1 className='title'>π Welcome to uber booking π</h1>
                    <p>π If you want to know that where is your riders so just click this button π</p>
                    <button className='riding-btn' onClick={() => this.riderFunc()}>Riders</button>
                   
                    <p>{this.state.message} {this.state.btn}<br /> {this.state.message1} {this.state.btn1} <br /> {this.state.message2} {this.state.btn2} <br /> {this.state.message3} {this.state.btn3}</p>
                    <h4>{this.state.render1} {this.state.accBtn} {this.state.rejBtn1}</h4>
                    <p>{this.state.cab}<br />{this.state.name}<br />{this.state.venue} <br />{this.state.time}<br />{this.state.placeInf}<h4>{this.state.amout}<br />{this.state.symble}</h4>{this.state.pese}</p>
                    <h4>{this.state.value}<br />{this.state.againR} {this.state.seeAmout}</h4>
                    <h4>{this.state.r1Acc} {this.state.r1_amount} <br /> {this.state.r2Acc} {this.state.r2_amount} <br /> {this.state.r3Acc} {this.state.r3_amount} <br /> {this.state.r4Acc} {this.state.r4_amount} </h4>
                </div>
            </div>
        )
    }
}
