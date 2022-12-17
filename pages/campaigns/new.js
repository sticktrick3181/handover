import React, { Component } from "react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Button, Form, Checkbox, Input, Message } from "semantic-ui-react";
import { Router } from "../../routes";
import Layout from "../../components/Layout";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    errorMessage: "",
    loading: false,
  };
  async submittionHandler(event) {
    await ethereum.enable();
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    // console.log(this.state.minimumContribution);
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);

      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0],
        });
      this.setState({ loading: true });
      Router.pushRoute("/");
    } catch (error) {
      this.setState({ errorMessage: error.message, loading: false });
    }
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
        <Form
          onSubmit={(e) => this.submittionHandler(e)}
          error={!!this.state.errorMessage}
        >
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
          {/* error message */}
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary type="submit">
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}
export default CampaignNew;
