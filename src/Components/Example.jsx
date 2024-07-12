import image1 from "../assets/p2.jpg";
import b from "../assets/b.jpg";
import "./Example.css";
import { FaCheckDouble } from "react-icons/fa6";
import { useState } from "react";

const Example = () => {
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.comment) {
      errors.comment = 'Comment is required';
    }

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (formData.website && !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(formData.website)) {
      errors.website = 'Website is invalid';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
  
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <div className="example-article">
      <h1>Writing.</h1>
      <div className="example-article-content">
        <img src={image1} alt="" />
        <div className="example-text-content">
          <h2>Loft Office With Vintage Decor For Creative Working</h2>
          <p>
            It’s no secret that the digital industry is booming. From exciting
            startups to global brands, companies are reaching out to digital
            agencies, responding to the new possibilities available. However,
            the industry is fast becoming overcrowded, heaving with agencies
            offering similar services — on the surface, at least. Producing
            creative, fresh projects is the key to standing out. Unique side
            projects are the best place to innovate, but balancing commercially
            and creatively lucrative work is tricky. So, this article looks at
            how to make side projects work and why they’re worthwhile, drawing
            on lessons learned from our development of the ux ompanion app.
          </p>
          <h2>Why Integrate Side Projects?</h2>
          <p>
            Being creative within the constraints of client briefs, budgets and
            timelines is the norm for most agencies. However, investing in
            research and development as a true, creative outlet is a powerful
            addition. In these side projects alone, your team members can pool
            their expertise to create and shape their own vision — a powerful
            way to develop motivation, interdisciplinary skills and close
            relationships.
          </p>
        </div>
      </div>
      <div className="example-text-icon">
        <FaCheckDouble className="example-iconC" />
        <div className="example-text">
          <b>
            People think focus means saying yes to the thing you’ve got to focus
            on.
          </b>
        </div>
      </div>
      <p className="example-sub">
        Building into the identity and culture of an agency can also lead to new
        client work. These projects act as a road map, showing clients exciting
        new technologies and ideas that will differentiate you from competitors.
        One of our earliest projects turned our website into a brochure,
        optimized for the first iPad’s touch interactions. By demonstrating the
        final product, we went on to win a project to create a similar product
        for a new client.
      </p>
      <div className="example-content">
        <div className="example-article">
          <p>
            We’re still working on achieving that perfect balance between
            commerce and creativity...
          </p>
          <img src={b} alt="Kitchen design" className="example-article-image" />
          <p>
            Commercializing side projects alongside client work isn’t easy...
          </p>
          <p>
            A significant shift in mindset is required to support either type of
            side project...
          </p>
        </div>

        <div className="example-posts-navigation">
          <div className="example-post previous">
            <img src={b} alt="Previous Post" />
            <p>Cosy Bright Office In Yellow And Grey Colors</p>
          </div>
          <div className="example-post next">
            <img src={b} alt="Next Post" />
            <p>Cheerful Loving Couple Bakers Drinking Coffee</p>
          </div>
        </div>
      </div>
      <div className="example-comment-form">
        <h2>Leave a reply:</h2>
        <p>Your email address will not be published.</p>
        <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your comment here..."
        name="comment"
        value={formData.comment}
        onChange={handleChange}
      />
      {errors.comment && <p className="error">{errors.comment}</p>}

      <div className="example-form-fields">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

   
       
      </div>

      <button type="submit" className="example-button">
        Post Comment
      </button>
    </form>
      </div>
    </div>
  );
};

export default Example;
