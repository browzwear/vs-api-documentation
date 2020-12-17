/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>FIND US</h5>
            <a href="https://gitlab.com/browzwear/share/open-platform/client-api/">GitLab</a>
            <a
              href="https://il.linkedin.com/company/browzwear"
              target="_blank"
              rel="noreferrer noopener">
              Linkedin
            </a>
            <a href="https://twitter.com/browzwear">Twitter</a>
            <a href="https://www.instagram.com/browzwear/">Instagram</a>
            <a href="https://www.facebook.com/browzwear/">Facebook</a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
