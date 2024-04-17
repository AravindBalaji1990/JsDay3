const data ={
    sample: function(){
        console.log(`this is the new data ${this.name}`)
    }
}

const data1 = Object.create(data)
data1.name = "datasample1"
data1.sample()

const data2 = Object.create(data)
data1.name = "datasample2"
data1.sample()