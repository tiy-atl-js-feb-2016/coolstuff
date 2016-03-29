import React from 'react';

var title = Math.random() > 0.5 ? 'Cool' : 'Crap';

var coolClass = `${title.toLowerCase()}-title`;

export default class App extends React.Component {
  
  clickHandler() {
    alert(this.props.secret);
  }

  render() {
    console.log(this.props.className);

    return (
      <div className={this.props.className}>
        <h3 className={coolClass}>{title} Story</h3>
        <p>This is some pretty cool stuff</p>
        <ul>
          <li>Just one thing</li>
        </ul>
        <aside>
          <span>I am spanning!</span>
          <button onClick={::this.clickHandler}>Click Me</button>
          <img src="http://fillmurray.com/50/50"/>
          <label htmlFor="what">What</label>
          <input id="what" type="text" defaultValue="What!"/>
        </aside>
      </div>
    );
  }
}
