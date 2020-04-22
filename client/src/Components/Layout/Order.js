import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { getCustMenu, clearState } from '../../actions/location';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { sendOrder } from '../../actions/order';
import TextField from '@material-ui/core/TextField';

const Order = ({
  getCustMenu,
  sendOrder,
  location: { dish1, dish2, dish3, dish4, dish5, p1, p2, p3, p4, p5, cuisine },
}) => {
  const [state, setState] = useState({
    qn1: 0,
    qn2: 0,
    qn3: 0,
    qn4: 0,
    qn5: 0,
  });

  var { qn1, qn2, qn3, qn4, qn5 } = state;
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  var cuisine123;
  var total = 0;
  var orderdetails = [];
  var t1, t2, t3, t4, t5;
  if (qn1 > 0) {
    t1 = p1 * qn1;
    total = total + t1;
    orderdetails.push(dish1 + ' X ' + qn1);
  }
  if (qn2 > 0) {
    t2 = p2 * qn2;

    total = total + t2;
    orderdetails.push(dish2 + ' X ' + qn2);
  }
  if (qn3 > 0) {
    t3 = p3 * qn3;

    total = total + t3;
    orderdetails.push(dish3 + ' X ' + qn3);
  }
  if (qn4 > 0) {
    t4 = p4 * qn4;

    total = total + t4;
    orderdetails.push(dish4 + ' X ' + qn4);
  }
  if (qn5 > 1) {
    t5 = p5 * qn5;

    total = total + t5;
    orderdetails.push(dish5 + ' X ' + qn5);
  }

  var curr_date = new Date().toISOString().substring(0, 10);

  const onOrder = (e) => {
    var curr_dest = localStorage.getItem('curr_dest');
    var curr_roomnumber = localStorage.getItem('curr_roomnumber');
    sendOrder(curr_dest, curr_roomnumber, orderdetails, total, curr_date);
  };

  return (
    <div>
      <div>
        <h2
          style={{
            fontFamily: 'prata',
            fontSize: '2rem',
            textAlign: 'left',
            margin: '4.5rem 3.5rem 2rem 3.5rem',
          }}
        >
          Build Your Order
        </h2>
        {!cuisine ? (
          <div className="cuisinebuttons">
            <p
              style={{
                fontFamily: 'prata',
                fontSize: '1.3rem',
                textAlign: 'center',
                margin: '',
              }}
            >
              Choose a Cuisine
            </p>
            <Button
              onClick={(e) => {
                cuisine = 'Italian';
                getCustMenu(cuisine);
              }}
              style={{
                fontFamily: 'Prata',
                background: 'none',
                color: '#373737',
                margin: '50px',
                width: '25%',
                borderRadius: '5px',
                border: '0.5px solid black',
              }}
            >
              Italian{' '}
            </Button>{' '}
            <Button
              onClick={(e) => {
                cuisine = 'Mexican';
                getCustMenu(cuisine);
              }}
              style={{
                fontFamily: 'Prata',
                background: 'none',
                color: '#373737',
                margin: '50px',
                width: '25%',
                borderRadius: '5px',
                border: '0.5px solid black',
              }}
            >
              Mexican{' '}
            </Button>{' '}
            <Button
              onClick={(e) => {
                cuisine = 'Thai';
                getCustMenu(cuisine);
              }}
              style={{
                fontFamily: 'Prata',
                background: 'none',
                color: '#373737',
                margin: '50px',
                width: '25%',
                borderRadius: '5px',
                border: '0.5px solid black',
              }}
            >
              Thai{' '}
            </Button>{' '}
            <Button
              onClick={(e) => {
                cuisine = 'Indian';
                getCustMenu(cuisine);
              }}
              style={{
                fontFamily: 'Prata',
                background: 'none',
                color: '#373737',
                margin: '50px',
                width: '25%',
                borderRadius: '5px',
                border: '0.5px solid black',
              }}
            >
              Indian{' '}
            </Button>{' '}
            <Button
              onClick={(e) => {
                cuisine = 'Lebanese';
                getCustMenu(cuisine);
              }}
              style={{
                fontFamily: 'Prata',
                background: 'none',
                color: '#373737',
                margin: '50px',
                width: '25%',
                borderRadius: '5px',
                border: '0.5px solid black',
              }}
            >
              Lebanese{' '}
            </Button>{' '}
            <Button
              onClick={(e) => {
                cuisine = 'Chinese';
                getCustMenu(cuisine);
              }}
              style={{
                fontFamily: 'Prata',
                background: 'none',
                color: '#373737',
                margin: '50px',
                width: '25%',
                borderRadius: '5px',
                border: '0.5px solid black',
              }}
            >
              Chinese{' '}
            </Button>{' '}
          </div>
        ) : (
          ''
        )}
        {cuisine ? (
          <div>
            <div style={{ height: '45rem' }}>
              <Link
                onClick={(e) => {
                  window.location.reload(true);
                }}
              >
                <p style={{ margin: '0px 0px 0px 100px' }}>
                  {' '}
                  &#8592; View Cuisines{' '}
                </p>
              </Link>
              <div
                style={{ width: '30%', float: 'left', background: 'white' }}
                className="menu"
              >
                <h2>Menu for {cuisine} Cuisine</h2>
                <table style={{ width: '20rem' }}>
                  <tr>
                    <td>
                      <p>
                        <b>Item</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Price</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Quantity</b>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>{dish1}</p>
                    </td>
                    <td>
                      <p>${p1}</p>
                    </td>
                    <td>
                      <FormControl>
                        <Select
                          style={{
                            margin: '1rem',
                            width: '4rem',
                            height: '1rem',
                          }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={qn1}
                          onChange={handleChange}
                          name="qn1"
                        >
                          <MenuItem value={0}>0</MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={6}>6</MenuItem>
                          <MenuItem value={7}>7</MenuItem>
                          <MenuItem value={8}>8</MenuItem>
                          <MenuItem value={9}>9</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                        </Select>
                      </FormControl>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>{dish2}</p>
                    </td>
                    <td>
                      <p>${p2}</p>
                    </td>
                    <td>
                      <FormControl>
                        <Select
                          style={{
                            margin: '1rem',
                            width: '4rem',
                            height: '1rem',
                          }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={qn2}
                          onChange={handleChange}
                          name="qn2"
                        >
                          <MenuItem value={0}>0</MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={6}>6</MenuItem>
                          <MenuItem value={7}>7</MenuItem>
                          <MenuItem value={8}>8</MenuItem>
                          <MenuItem value={9}>9</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                        </Select>
                      </FormControl>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>{dish3}</p>
                    </td>
                    <td>
                      <p>${p3}</p>
                    </td>
                    <td>
                      <FormControl>
                        <Select
                          style={{
                            margin: '1rem',
                            width: '4rem',
                            height: '1rem',
                          }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={qn3}
                          onChange={handleChange}
                          name="qn3"
                        >
                          <MenuItem value={0}>0</MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={6}>6</MenuItem>
                          <MenuItem value={7}>7</MenuItem>
                          <MenuItem value={8}>8</MenuItem>
                          <MenuItem value={9}>9</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                        </Select>
                      </FormControl>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>{dish4}</p>
                    </td>
                    <td>
                      <p>${p4}</p>
                    </td>
                    <td>
                      <FormControl>
                        <Select
                          style={{
                            margin: '1rem',
                            width: '4rem',
                            height: '1rem',
                          }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={qn4}
                          onChange={handleChange}
                          name="qn4"
                        >
                          <MenuItem value={0}>0</MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={6}>6</MenuItem>
                          <MenuItem value={7}>7</MenuItem>
                          <MenuItem value={8}>8</MenuItem>
                          <MenuItem value={9}>9</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                        </Select>
                      </FormControl>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>{dish5}</p>
                    </td>
                    <td>
                      <p>${p5}</p>
                    </td>
                    <td>
                      <FormControl>
                        <Select
                          style={{
                            margin: '1rem',
                            width: '4rem',
                            height: '1rem',
                          }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={qn5}
                          onChange={handleChange}
                          name="qn5"
                        >
                          <MenuItem value={0}>0</MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={6}>6</MenuItem>
                          <MenuItem value={7}>7</MenuItem>
                          <MenuItem value={8}>8</MenuItem>
                          <MenuItem value={9}>9</MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                        </Select>
                      </FormControl>
                    </td>
                  </tr>
                </table>
              </div>
              <div
                style={{
                  background: 'white',
                  height: '35rem',
                  width: '45%',
                  float: 'right',
                }}
                className="menu"
              >
                <h2>Your Order Summary</h2>
                <table style={{ width: '40rem' }}>
                  <tr>
                    <td>
                      <p>
                        <b>Items Ordered</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Quantity Ordered</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Price</b>
                      </p>
                    </td>
                    <td>
                      <p>
                        <b>Total Price for Item</b>
                      </p>
                    </td>
                  </tr>
                  {t1 > 0 ? (
                    <tr>
                      <td>
                        <p>{dish1}</p>
                      </td>
                      <td>
                        <p>{qn1}</p>
                      </td>
                      <td>
                        <p>${p1}</p>
                      </td>
                      <td>
                        <p>${t1}</p>
                      </td>
                    </tr>
                  ) : (
                    ''
                  )}
                  {t2 > 0 ? (
                    <tr>
                      <td>
                        <p>{dish2}</p>
                      </td>
                      <td>
                        <p>{qn2}</p>
                      </td>
                      <td>
                        <p>${p2}</p>
                      </td>
                      <td>
                        <p>${t2}</p>
                      </td>
                    </tr>
                  ) : (
                    ''
                  )}
                  {t3 > 0 ? (
                    <tr>
                      <td>
                        <p>{dish3}</p>
                      </td>
                      <td>
                        <p>{qn3}</p>
                      </td>
                      <td>
                        <p>${p3}</p>
                      </td>
                      <td>
                        <p>${t3}</p>
                      </td>
                    </tr>
                  ) : (
                    ''
                  )}
                  {t4 > 0 ? (
                    <tr>
                      <td>
                        <p>{dish4}</p>
                      </td>
                      <td>
                        <p>{qn4}</p>
                      </td>
                      <td>
                        <p>${p4}</p>
                      </td>
                      <td>
                        <p>${t4}</p>
                      </td>
                    </tr>
                  ) : (
                    ''
                  )}
                  {t5 > 0 ? (
                    <tr>
                      <td>
                        <p>{dish5}</p>
                      </td>
                      <td>
                        <p>{qn5}</p>
                      </td>
                      <td>
                        <p>${p5}</p>
                      </td>
                      <td>
                        <p>${t5}</p>
                      </td>
                    </tr>
                  ) : (
                    ''
                  )}
                </table>
                {total > 0 ? (
                  <table style={{ width: '98%', borderTop: '1px solid black' }}>
                    <tr>
                      <td>
                        <p
                          style={{
                            fontFamily: 'Cambria',
                            fontSize: '1rem',
                            marginRight: '100px',
                            textAlign: 'center',
                          }}
                        >
                          <b>Total</b>
                        </p>
                      </td>
                      <td>
                        <p></p>
                      </td>
                      <td>
                        <p></p>
                      </td>
                      <td>
                        <p
                          style={{
                            fontFamily: 'Cambria',
                            fontSize: '1rem',
                            marginLeft: '100px',
                            textAlign: 'center',
                          }}
                        >
                          <b>${total}</b>
                        </p>
                      </td>
                    </tr>
                  </table>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div
              style={{
                height: '30rem',
                background: 'rgb(243, 243, 243)',
              }}
              className="summarycontainer"
            >
              <div>
                <form style={{ float: 'left' }}>
                  <h2 style={{ marginLeft: '25px' }}>Payment Information</h2>
                  <div style={{ margin: '1rem', display: 'inline-block' }}>
                    <TextField
                      variant="outlined"
                      label="Name on Card"
                      style={{
                        background: 'white',
                        borderRadius: '5px',
                        border: '0.5px solid white',
                        width: '24rem',
                        height: 'auto',
                        margin: '0rem 1rem 0rem 0.5rem',
                      }}
                      name="name"
                      type="text"
                      required
                    />
                  </div>
                  <br />
                  <div style={{ margin: '1rem', display: 'inline-block' }}>
                    <TextField
                      variant="outlined"
                      label="Enter Card Number"
                      style={{
                        background: 'white',
                        borderRadius: '5px',
                        border: '0.5px solid white',
                        width: '24rem',
                        height: 'auto',
                        margin: '0rem 1rem 0rem 0.5rem',
                      }}
                      name="cardnumber"
                      type="number"
                      required
                    />
                  </div>
                  <br />
                  <div style={{ margin: '1rem', display: 'inline-block' }}>
                    <TextField
                      variant="outlined"
                      label="Expiration"
                      style={{
                        background: 'white',
                        borderRadius: '5px',
                        border: '0.5px solid white',
                        width: '10rem',
                        height: 'auto',
                        margin: '0rem 1rem 0rem 0.5rem',
                      }}
                      name="exp"
                      type="text"
                      max="5"
                    />
                  </div>

                  <div style={{ margin: '1rem', display: 'inline-block' }}>
                    <TextField
                      variant="outlined"
                      label="CVC"
                      style={{
                        background: 'white',
                        borderRadius: '5px',
                        border: '0.5px solid white',
                        width: '10rem',
                        height: 'auto',
                        margin: '0rem 1rem 0rem 0.5rem',
                      }}
                      name="cvv"
                      type="number"
                      max="4"
                      required
                    />
                  </div>
                  {total ? (
                    <div style={{ height: '20rem' }}>
                      <Link to="/ordersummary">
                        <Button
                          onClick={(e) => {
                            onOrder(e);
                          }}
                          style={{
                            margin: '30px 100px 50px 30px',
                            background: 'black',
                            color: 'white',
                            height: '3rem',
                            width: '20rem',
                          }}
                        >
                          Confirm Order and Pay
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div style={{ height: '20rem' }}></div>
                  )}
                </form>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  location: state.location,
  booking: state.booking,
});

Order.propTypes = {
  getCustMenu: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  clearState: PropTypes.func.isRequired,
  sendOrder: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getCustMenu, sendOrder, clearState })(
  Order
);
