import React from "react";
import ReactImageMagnify from "react-image-magnify";
import Navbar from "../Homepage/Navbar";

import "./styles.css";
import ingredient from "../assets/images/ayurvedic-ingredients.svg";
import Footer from "../Homepage/Footer";
import ProductData from "../Products/ProductData.json";
import axios from "axios";
import CallIcon from "../assets/images/call-icon.png";
const API_PATH = "contactform/contactform.php";

class DetailProduct extends React.Component {
  state = {
    product: null,
    currentImage: null,
    fname: "",
    mobile: "",
    mobileError: null,
    fnameError: null,
    message: "",
    id: -1,
    mailSent: false,
    erorr: "",
  };

  componentDidMount() {
    let product = ProductData.find(
      (product) => product.title == this.props.id.split("_").join(" ")
    );

    window.scrollTo(0, 0);

    this.setState({
      product,
      mailSent: false,
    });
    setTimeout(() => {
      this.setState({
        currentImage: `https://srasmedicines.com/assets/images/product/${this.state.product.images[0].image}`,
      });
    }, 100);
  }

  imageHandler = (image) => {
    this.setState({
      currentImage: image,
    });
  };

  shareHandler = () => {
    let url = `https://srasmedicines.com/product/${this.props.id}`;
    let title = this.state.product.title;
    if (navigator.share) {
      navigator.share({
        title,
        url,
      });
    } else {
      console.log("not supported");
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const reg = /^\d+$/;
    if (this.state.fname.length < 1 || this.state.fname.length > 100) {
      this.setState({
        fnameError: "Enter correct name / सही नाम दर्ज करें",
      });
    } else {
      this.setState({
        fnameError: null,
      });
      if (this.state.mobile.length !== 10 || !reg.test(this.state.mobile)) {
        this.setState({
          mobileError:
            "Enter correct mobile number / सही मोबाइल नंबर दर्ज करें",
        });
      } else {
        this.setState({ mobileError: null });

        let data = {
          fname: this.state.fname,
          mobile: this.state.mobile,
          message: this.state.product.title,
        };
        axios({
          method: "post",
          url: `${API_PATH}`,
          headers: { "content-type": "application/json" },
          data,
        })
          .then((result) => {
            this.setState({
              mailSent: true,
            });
            console.log("Response", result.data.sent);
          })
          .catch((error) => {
            console.log("Some Error", error);
            this.setState({ error: error.message });
          });
      }
    }
  };

  render() {
    let descriptionArray = [];
    let indicationsArray = [];
    let benefits = null;
    let compositionArray = [];
    let description = null;
    if (this.state.product !== null) {
      descriptionArray = this.state.product.description.split(";");
      indicationsArray = this.state.product.indication.split(",");
      compositionArray = this.state.product.detail.composition.split(";");
      benefits = descriptionArray[3].split(",");
      if (descriptionArray[1] != "null") {
        description = descriptionArray[1];
      }
    }
    return (
      <div className="product-page">
        <Navbar />
        {this.state.product !== null ? (
          <div className="product-detail">
            <div className="product-detail-a">
              <div className="product-detail-image">
                <div className="product-detail-image-a">
                  {this.state.currentImage !== null && (
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "",
                          isFluidWidth: true,
                          src: this.state.currentImage,
                          srcSet: "",
                        },
                        largeImage: {
                          src: this.state.currentImage,
                          width: 1200,
                          height: 1200,
                        },
                      }}
                    />
                  )}
                </div>
                <div className="product-detail-image-a-mobile">
                  {this.state.currentImage !== null && (
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "",
                          isFluidWidth: true,
                          src: this.state.currentImage,
                          srcSet: "",
                        },
                        largeImage: {
                          src: this.state.currentImage,
                          width: 1200,
                          height: 1200,
                        },
                      }}
                    />
                  )}
                </div>
                <div className="product-detail-image-b">
                  {Object.keys(this.state.product.images).map((image, index) =>
                    this.state.product.images[image] !== null &&
                    this.state.product.images[image] !== undefined ? (
                      <button
                        className="product-detail-image-b-button"
                        key={index}
                        onClick={() =>
                          this.imageHandler(
                            `https://srasmedicines.com/assets/images/product/${this.state.product.images[image].image}`
                          )
                        }
                      >
                        <img
                          key={index}
                          src={`https://srasmedicines.com/assets/images/product/${this.state.product.images[image].image}`}
                          alt={this.state.product.images[image].caption}
                        />
                      </button>
                    ) : null
                  )}
                </div>
              </div>
              <div className="product-detail-info">
                <div className="share">
                  <h2>{this.state.product.title}</h2>
                  {navigator.share && (
                    <button onClick={this.shareHandler}>Share</button>
                  )}
                </div>
                <h3>{this.state.product.headline}</h3>
                <h4>₹ {this.state.product.detail.price}</h4>
                {/* here will be contact form */}
                <div>
                  <h4>To Buy / खरीदने के लिए</h4>
                  <p className="benefit" style={{ background: "#f2f7ff" }}>
                    Call us at :
                    <div className="footer-details">
                      <img src={CallIcon} alt="Mobile" />
                      <a href="tel:+918929987739">+91 89299 87739</a>
                    </div>
                  </p>
                </div>

                {/*                 {!this.state.mailSent && (
                  <div className="buy-product">
                    <h4>To Buy / खरीदने के लिए</h4>
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                      <label htmlFor="fname">
                        Enter name / नाम भरें
                        <input
                          type="text"
                          name="fname"
                          id="fname"
                          value={this.state.fname}
                          className={this.state.fnameError ? "error-glow" : ""}
                          onChange={(e) =>
                            this.setState({ fname: e.target.value })
                          }
                        />
                      </label>
                      {this.state.fnameError && (
                        <p className="form-error">{this.state.fnameError}</p>
                      )}
                      <label htmlFor="mobile">
                        Mobile / मोबाइल नंबर
                        <input
                          type="text"
                          name="mobile"
                          id="mobile"
                          className={this.state.mobileError ? "error-glow" : ""}
                          value={this.state.mobile}
                          onChange={(e) =>
                            this.setState({ mobile: e.target.value })
                          }
                        />
                      </label>
                      {this.state.mobileError && (
                        <p className="form-error">{this.state.mobileError}</p>
                      )}
                      <button type="submit">Send / भेजें</button>
                    </form>
                  </div>
                )}
                {this.state.mailSent && (
                  <div className="buy-product buy-product-response">
                    <h5>Your request has been submitted successfully.</h5>
                    <p>
                      We will contact you as soon as we review your request.
                    </p>
                    <h5>आपका अनुरोध सफलतापूर्वक सबमिट कर दिया गया है</h5>
                    <p>
                      जैसे ही हम आपके अनुरोध की समीक्षा करेंगे, हम आपसे संपर्क
                      करेंगे।
                    </p>
                  </div>
                )} */}

                {description != null ? (
                  <div>
                    <h2 style={{ margin: "20px 0px 0px 0px" }}>Description</h2>
                    <p className="benefit" style={{ background: "#f2f7ff" }}>
                      {description}
                    </p>
                  </div>
                ) : null}
                <h2 style={{ margin: "20px 0px 0px 0px" }}>Benefits</h2>
                {benefits !== null &&
                  benefits.map((benefit, index) => (
                    <div key={index}>
                      <p className="benefit">{benefit}</p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="product-desk">
              <div className="product-desk-a">
                {this.state.product.usage.length > 0 && (
                  <div>
                    <h2>Usage</h2>
                    <p>{this.state.product.usage}</p>
                  </div>
                )}
                <h2>Ingredients</h2>
                {compositionArray[0] !== "null" && (
                  <div className="ingredient-heading">
                    <h3>{compositionArray[0]}</h3>
                  </div>
                )}
                {Object.keys(this.state.product.ingredients).map((index) =>
                  this.state.product.ingredients[index].amount !== 0 ? (
                    <div key={index} className="ingredient">
                      <img src={ingredient} alt="ingredient" />
                      <h3>{this.state.product.ingredients[index].name}</h3>
                      <p>
                        {this.state.product.ingredients[index].amount_scale == 1
                          ? "q.s"
                          : this.state.product.ingredients[index]
                              .amount_scale == 2
                          ? `${this.state.product.ingredients[index].amount} mg`
                          : this.state.product.ingredients[index]
                              .amount_scale == 3
                          ? `${this.state.product.ingredients[index].amount} gm`
                          : ""}
                      </p>
                    </div>
                  ) : (
                    <div key={index} className="ingredient-heading">
                      <h3>{this.state.product.ingredients[index].name}</h3>
                    </div>
                  )
                )}
              </div>
              <div className="product-desk-b">
                {indicationsArray.length > 0 && (
                  <div className="indications">
                    <h2>Indications</h2>
                    {indicationsArray.map((indication, index) => (
                      <p key={index}>{indication}</p>
                    ))}
                  </div>
                )}
                <h2>Technical</h2>
                <div className="product-desk-b-detail">
                  <h3>Medicine Name:</h3>
                  <p>{this.state.product.title}</p>
                </div>
                <div className="product-desk-b-detail">
                  <h3>Price:</h3>
                  <p>₹ {this.state.product.detail.price}</p>
                </div>
                <div className="product-desk-b-detail">
                  <h3>Quantity:</h3>
                  <p>{this.state.product.detail.quantity}</p>
                </div>
                <div className="product-desk-b-detail">
                  <h3>Form factor:</h3>
                  <p>{this.state.product.detail.p_type}</p>
                </div>

                {this.state.product.detail.weight !== 0 && (
                  <div>
                    <h3>Weight:</h3>
                    <p>
                      {this.state.product.detail.weight}
                      gm
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}

        <Footer />
      </div>
    );
  }
}

export default DetailProduct;
