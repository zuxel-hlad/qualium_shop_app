import AppCreateForm from "../../components/app-create-form/app.create-form";
import "./create-view.scss";

const CreateView = () => {
  return (
    <section className="section create-view">
      <AppCreateForm btnText="create"/>
    </section>
  );
};

export default CreateView;
