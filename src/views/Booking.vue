<template>
  <div>
    <h1>预约取件</h1>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="运单号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
'number',
{rules: [{ required: true, message: 'Please input your 运单号!' }]}
]"
        />
      </a-form-item>
      <a-form-item label="取件时间" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
'time',
{rules: [{ required: true, message: 'Please input your 取件时间!' }]}
]"
        />
      </a-form-item>
      
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          window.console.log(values);
          
        }this.$store.dispatch("addMsg2", values);
      });
    }
  }
};
</script>