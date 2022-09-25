import React, { Component } from "react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Button, Form, Checkbox, Input } from "semantic-ui-react";
import Layout from "../../components/Layout";
class CampaignNew extends Component {
  state = {
    minimumContribution: "",
  };
  async submittionHandler(event) {
    // event.preventDefault();
    console.log(this.state.minimumContribution);
    const accounts = await web3.eth.getAccounts();
    await factory.methods.createCampaign(this.state.minimumContribution).send({
      from: accounts[0],
    });
  }
  onChange(event) {
    this.setState({ minimumContribution: event.target.value });
    console.log(this.state.minimumContribution);
  }
  render() {
    return (
      <Layout>
        <div>
          <h1>Create a new Campaign</h1>
        </div>
        <Form onSubmit={(e) => this.submittionHandler(e)}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={(e) => this.onChange(e)}
            />
          </Form.Field>
          {/* <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field> */}
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button primary type="submit">
            Submit
          </Button>
        </Form>
      </Layout>
    );
  }
}
export default CampaignNew;
