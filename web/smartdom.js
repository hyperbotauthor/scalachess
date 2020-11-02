class MultipleSelect_ extends SmartdomElement_{
	selectedKeys(){
		return Object.entries(this.checkBoxes).filter(cb => cb[1].checkbox.e.checked).map(cb => cb[0])
	}
	
	storeSelectedKeys(){
		this.store({
			selectedKeys: this.selectedKeys()
		})
	}
	
	constructor(props){
        super({...props, ...{tagName: "div"}})           
		
		this.options = props.options
		
		this.checkBoxes = {}
		
		this.pad(1).bc("#aaa").fl().a(this.options.map(option => 
			Labeled(option[1], this.checkBoxes[option[0]] = CheckBox({id: option[0]}))
		))
		
		for(let key in this.checkBoxes){
			this.checkBoxes[key].checkbox.ae("change", _=> this.storeSelectedKeys())
		}
		
		this.storeSelectedKeys()
    }
}
function MultipleSelect(props){return new MultipleSelect_(props)}

class hr_ extends SmartdomElement_{
    constructor(){
        super({tagName: "hr"})
    }
}

function hr(){return new hr_()}