import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import classNames from "classnames/bind";
import style from "./loginForm.module.scss";
import { observer, inject } from "mobx-react";
const cx = classNames.bind(style);

const LoginForm = inject("authStore")(
	observer(({ form, authStore }) => {
		function handleSubmit(e) {
			e.preventDefault();
			form.validateFields((err, values) => {
				if (!err) {
					console.log("Received values of form: ", values);
					authStore.setLoginPayload({
						email: values.email,
						password: values.password,
					});
					authStore.login();
				}
			});
		}

		return (
			<section className={cx("wrapper")}>
				<Form onSubmit={handleSubmit} className={cx("login-form")}>
					<Form.Item>
						{form.getFieldDecorator("email", {
							rules: [{ required: true, message: "Please input your email!" }],
						})(
							<Input
								prefix={
									<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
								}
								placeholder="Email"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						{form.getFieldDecorator("password", {
							rules: [
								{ required: true, message: "Please input your Password!" },
							],
						})(
							<Input
								prefix={
									<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
								}
								type="password"
								placeholder="Password"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						{form.getFieldDecorator("remember", {
							valuePropName: "checked",
							initialValue: true,
						})(<Checkbox>Remember me</Checkbox>)}
						<a className={cx("login-form-forgot")} href="">
							Forgot password
						</a>
						<Button
							type="primary"
							htmlType="submit"
							className={cx("login-form-button")}>
							Log in
						</Button>
						Or <a href="">register now!</a>
					</Form.Item>
				</Form>
			</section>
		);
	}),
);

export default Form.create({ name: "normal_login" })(LoginForm);
