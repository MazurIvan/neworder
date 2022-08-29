import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import borsch from "./components/borsch.jpg";
import pelmeny from "./components/pelmeny.jpg";
import meat from "./components/meat.jpg";
import salad from "./components/salad.jpg";
import pepper from './components/pepper.jpg';
import uzvar from './components/uzvar.jpg';
import Categories from "./components/Categories";
import ShowFullItems from "./components/ShowFullItems";
import Inform from "./components/Inform";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Борщ',
          img: borsch,
          desc: 'На свинних реберцях, зі сметаною та пампушками з салом. 400г.',
          category: 'soup',
          price: '109.00'
        },
        {
          id: 2,
          title: 'Вареники з картоплею',
          img: pelmeny,
          desc: 'З підсмаженними грибами, сметаною та шкварками. 300г.',
          category: 'garnish',
          price: '79.00'
        },
        {
          id: 3,
          title: "М'ясна тарілка",
          img: meat,
          desc: 'Копчена грудинка, буженина та домашня ковбаса. 200г.',
          category: 'snack',
          price: '95.00'
        },
        {
          id: 4,
          title: 'Сезонний салат',
          img: salad,
          desc: 'Салат з сезонних овочів під вишуканим дресінгом. 250г',
          category: 'snack',
          price: '65.00'
        },
        {
          id: 5,
          title: 'Фаршировані перці',
          img: pepper,
          desc: "Запечений солодкий перець з телятиною та булгуром. 400г",
          category: 'garnish',
          price: '129.00'
        },
        {
          id: 6,
          title: 'Узвар',
          img: uzvar,
          desc: 'Сушені яблука, груша, цитрусові та підкопчені сливи. 200мл.',
          category: 'drink',
          price: '32.00'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItems onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Inform />
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
