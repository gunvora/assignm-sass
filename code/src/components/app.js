import React from "react"
import "./app.css"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="tabs-container">
          <div className="tab-container-hidden">
            <div className="xxx">Flyg</div>
          </div>
          <div className="tab-container">
            <div>
              <div className="tab-destination">
                <div className="fly-from">
                  <label>Flyg från:
                    <input
                      type="text"
                      name="from"
                      placeholder="Varifrån vill du åka?" />
                  </label>
                  <hr />
                </div>
                <div className="fly-from">
                  <label>Flyg till:
                    <input
                      type="text"
                      name="to"
                      placeholder="Vart vill du åka?" />
                  </label>
                  <hr width="100%" />
                </div>
              </div>
              <div className="suggested-destination">
                <span>Stockholm, Göteborg</span> eller <span>Malmö</span>?
              </div>
              <div className="order-button_with_line">
                <input
                  className="order-button"
                  type="submit"
                  value="Sök och beställ" />
                <div className="order-button-line">
                  <hr width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App
