import React from 'react'
import dayjs from 'dayjs'
import Grilla from '../components/Grilla'
import MiSlider from '../components/MiSlider'


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            news:[],
            isLoading: true
        }
    }

    async componentDidMount(){
        const date = dayjs()
        const dateFormatted = date.format('YYYY[-]MM[-]DD')
        try {
            const response = await fetch(`https://api.canillitapp.com/latest/${dateFormatted}`);
            if (!response.ok) {
              throw Error(response.statusText);
            }
            const json = await response.json();
            console.log(json)
            this.setState({ 
              news: json, 
              isLoading: false
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        
        return(
            <div>
                {this.state.isLoading && <div>Cargando...</div>}
                {!this.state.isLoading &&  ( 
                    
                    <div>
                        <MiSlider news={this.state.news} />
                        <Grilla news={this.state.news}/>
                    </div>
                )}
             </div>
        )
    }

}

export default Home