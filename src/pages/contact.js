import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Page</h1>
    <Link to="/">Home</Link>
    <h2>Formspring</h2>
    <form
      id="fs-frm"
      name="simple-contact-form"
      accept-charset="utf-8"
      action="https://formspree.io/email@zacgordon.com"
      method="post"
    >
      <input
        type="hidden"
        name="_next"
        value="https://mysite.com/thanks.html"
      />

      <label for="full-name">Full Name</label>
      <input
        type="text"
        name="name"
        id="full-name"
        placeholder="First and Last"
        required=""
      />
      <label for="email-address">Email Address</label>
      <input
        type="email"
        name="_replyto"
        id="email-address"
        placeholder="email@domain.tld"
        required=""
      />
      <label for="message">Message</label>
      <textarea
        rows="5"
        name="message"
        id="message"
        placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
        required=""
      ></textarea>
      <input
        type="hidden"
        name="_subject"
        id="email-subject"
        value="Contact Form Submission"
      />
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
    <h2>Netlify Forms</h2>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Your Role:{" "}
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default SecondPage
