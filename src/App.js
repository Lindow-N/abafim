
import './App.css';
import React from 'react';
import json from './client.json';

import Axios from 'axios';
import { Component, useState } from 'react';

class App extends React.Component {


state = {
  data: [],
  nb: 0,
  first:Number,
}

componentDidMount = async () => {
  const data = json[2].data;
  this.setState({nb:data.length});

  for (var i = data.length -1; i > data.length-21 ; i--) {

    var location = document.getElementById('customers');

    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    var th4 = document.createElement('th');
    var th5 = document.createElement('th');
    var th6 = document.createElement('th');

    th1.textContent = data[i].etat_c;
    th2.textContent = data[i].nom_c +" " + data[i].prenom_c ;
    th3.textContent = data[i].ville_c +" " + data[i].cp_c;
    th4.textContent = data[i].pays_c;
    th5.textContent = data[i].date_de_modification_c;
    th6.textContent = data[i].datec_c;

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);

    location.appendChild(tr);

    this.setState({first:data.length-11})
  
  }


}

AddData = () => {

  
  var test = this.state.first;
  const data = json[2].data;



  for (var j = test; j > test-20 ; j--) {

    this.setState({first:test-20})


    var location = document.getElementById('customers');

    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    var th4 = document.createElement('th');
    var th5 = document.createElement('th');
    var th6 = document.createElement('th');

    th1.textContent = data[j].etat_c;
    th2.textContent = data[j].nom_c +" " + data[j].prenom_c ;
    th3.textContent = data[j].ville_c +" " + data[j].cp_c;
    th4.textContent = data[j].pays_c;
    th5.textContent = data[j].date_de_modification_c;
    th6.textContent = data[j].datec_c;

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);

    location.appendChild(tr);

}
}
render() {


  return (
    <div className="App">

<h1>Tables des {this.state.nb} client </h1>

<table id="customers">
  <tr id="customers2">
    <th>état</th>
    <th>nom et prénom</th>
    <th>ville et code postal</th>
    <th>pays</th>
    <th>date modification</th>
    <th>date création</th>
  </tr>

</table>

<button id="btnNext" className="btnNext" onClick={this.AddData}>Voir plus</button>


    </div>
  )
}
}
export default App;
