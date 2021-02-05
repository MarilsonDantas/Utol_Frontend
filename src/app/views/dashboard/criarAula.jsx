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

import { Autocomplete } from "@material-ui/lab";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import "date-fns";

import api from "../../services/api";

import DateFnsUtils from "@date-io/date-fns";
import ptBR from "date-fns/locale/pt-BR";

class CriarAula extends Component {
  state = {}

  state = {
    nome: "",
    tipo: "",
    descricao: "",
    data_inicio: new Date(),
    data_fim: new Date()
  };

  changeDate = (str) => {
      var month, day, hours, minutes, seconds;

      var date = new Date(str),
          month = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
          hours = ("0" + date.getHours()).slice(-2);
          minutes = ("0" + date.getMinutes()).slice(-2);
          seconds = ("0" + date.getSeconds()).slice(-2);

      var mySQLDate = [date.getFullYear(), month, day].join("-");
      var mySQLTime = [hours, minutes, seconds].join(":");
      return [mySQLDate, mySQLTime].join(" ");    
  }

  handleSubmit = async (event) => {

    this.setState({ data_inicio: this.changeDate(this.state.data_inicio) });
    this.setState({ data_fim: this.changeDate(this.state.data_fim) });

    
    const dadosAula = this.state;

    dadosAula.usuario_inclusao = this.props.user.idusuario;
    // dadosAula.data_inclusao = new Date();
    dadosAula.curso_idcurso =  this.props.location.state.curso.idcurso;

    console.log(dadosAula, this.props.location.state.curso);

    const response = await api.post('storeAula', dadosAula);
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChangeInicio = data_inicio => {
    this.setState({ data_inicio });
  };

  handleDateChangeFim = data_fim => {
    this.setState({ data_fim });
  };


  onTagsChange = (event, values) => {
    this.setState({
      tipo: values.label
    });
  }

  render() {
    let {
        nome,
        descricao,
        data_inicio,
        data_fim,
    } = this.state;

    const {curso} = this.props.location.state;

    return (
      <div className="m-sm-30">

        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Cursos", path: "/dashboard/analytics" },
              { name: "Criação de aula" }
            ]}
          />
        </div>

        <SimpleCard title={`Criação de aula para curso: ${curso.nome}`}>
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
                  label="Nome"
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
                  options={[{label: 'Prova'}, {label: "Aula teórica"}, {label: "Aulas de exercicios"}]}
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

            <Grid container spacing={6}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
                  <KeyboardDatePicker
                    className="mb-4 w-full"
                    margin="none"
                    label="Início"
                    inputVariant="standard"
                    type="text"
                    autoOk={true}
                    value={data_inicio}
                    onChange={this.handleDateChangeInicio}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
                  <KeyboardDatePicker
                    className="mb-4 w-full"
                    margin="none"
                    label="Fim"
                    inputVariant="standard"
                    type="text"
                    autoOk={true}
                    value={data_fim}
                    onChange={this.handleDateChangeFim}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
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

CriarAula.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

// export default withStyles({}, { withTheme: true })(Dashboard1);

export default withStyles({}, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, {
    })(CriarAula)
  )
);

