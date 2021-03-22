import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";


import { withStyles } from "@material-ui/styles";
import { Breadcrumb, SimpleCard } from "matx";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Button,
  Icon,
  Grid,
  TextField
} from "@material-ui/core";

import "date-fns";
import { Autocomplete } from "@material-ui/lab";

import api from "../../services/api";


class CriarCurso extends Component {
  state = {
    nome: "",
    tipo: "",
    descricao: ""
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const dadosCurso = this.state;

    dadosCurso.usuario_inclusao = this.props.user.idusuario;
    dadosCurso.idprofessor_responsavel = this.props.user.idprofessor;

    const response = await api.post('storeCurso', dadosCurso);

    this.props.history.push("/dashboard/home");
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  onTagsChange = (event, values) => {
    this.setState({
      tipo: values.label
    });
  }

  render() {
    let {
      nome,
      descricao
    } = this.state;

    return (
      <div className="m-sm-30">

        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Meus Cursos", path: "/dashboard/analytics" },
              { name: "Criação de curso" }
            ]}
          />
        </div>

        <SimpleCard title="Criação de curso">
          <div>
          <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
            onError={errors => null}
          >
            <Grid container spacing={6}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TextValidator
                  className="mb-4 w-full"
                  label="Nome do curso"
                  onChange={this.handleChange}
                  type="text"
                  name="nome"
                  value={nome}
                  validators={[
                    "required",
                  ]}
                  errorMessages={["Obrigatório"]}
                />
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Autocomplete
                  className="mb-6 w-full"
                  options={[{label: 'Exercicios'}, {label: "Aulas"}, {label: "Aulas + exercicios"}]}
                  onChange={this.onTagsChange}
                  name="tipo"
                  getOptionLabel={option => option.label}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label={"Tipo"}
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextValidator
                  className="mb-4 w-full"
                  label="Descrição"
                  onChange={this.handleChange}
                  type="text"
                  name="descricao"
                  value={descricao}
                  validators={[
                    "required",
                  ]}
                  errorMessages={["Obrigatório"]}
                />
              </Grid>
            <Button color="primary" variant="contained" type="submit">
              <Icon>send</Icon>
              <span className="pl-2 capitalize">Criar</span>
            </Button>
          </ValidatorForm>
        </div>
        </SimpleCard>

      </div>
    );
  }
}



CriarCurso.propTypes = {
  user: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  user: state.user,
});

// export default withStyles({}, { withTheme: true })(Dashboard1);

export default withStyles({}, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, {
    })(CriarCurso)
  )
);