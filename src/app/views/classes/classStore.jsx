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
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody ,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Autocomplete } from "@material-ui/lab";

import api from "../../services/api";

class ClassStore extends Component {
  state = {
    nome: "",
    descricao: "",
    tipo: "",
    id_course: this.props.match.params.id_course,
    data_inicio: new Date(),
    data_fim: new Date(),
    curso: {},
    negativeBalance: true,
    // contasDebito: [],
    // contasCredito: [],
    // movimentacaoDebito: [],
    // movimentacaoCredito: [],
    // totalDebito: 0,
    // totalCredito: 0,
    // showCategories: false,
  };

  async componentDidMount(){
    const contasPai = await api.get(`getCategoriesFathers`);

    const resultDebito  = [ ...contasPai.data ];
    const resultCredito = [ ...contasPai.data ];

    this.setState({contasDebito: resultDebito});
    this.setState({contasCredito: resultCredito});

  }

  handleSubmit = async (event) => {
    event.preventDefault();

    function changeDate(str) {
      let month, day, hours, minutes, seconds, date;

      date = new Date(str)
          month = ("0" + (date.getMonth() + 1)).slice(-2)
          day = ("0" + date.getDate()).slice(-2)
          hours = ("0" + date.getHours()).slice(-2)
          minutes = ("0" + date.getMinutes()).slice(-2)
          seconds = ("0" + date.getSeconds()).slice(-2)

      let mySQLDate = [date.getFullYear(), month, day].join("-");
      let mySQLTime = [hours, minutes, seconds].join(":");
      return [mySQLDate, mySQLTime].join(" ");    
    }

    const dadosAula = this.state;

    dadosAula.data_inicio = changeDate(dadosAula.data_inicio);
    dadosAula.data_fim = changeDate(dadosAula.data_fim);

    dadosAula.usuario_inclusao = this.props.user.idusuario;
    dadosAula.data_inclusao = changeDate(new Date());


    dadosAula.usuario_inclusao = this.props.user.idusuario;
    dadosAula.idprofessor_responsavel = this.props.user.idusuario;

    // delete dadosAula.contasCredito;
    // delete dadosAula.contasDebito;

    const response = await api.post('storeAula', dadosAula);

    this.props.history.push(`/curso/${this.props.match.params.id_course}`);

  };

  handleDateChangeInicio = e => {
    function changeDate(str) {
      let month, day, hours, minutes, seconds, date;

      date = new Date(str)
      month = ("0" + (date.getMonth() + 1)).slice(-2)
      day = ("0" + date.getDate()).slice(-2)
      hours = ("0" + date.getHours()).slice(-2)
      minutes = ("0" + date.getMinutes()).slice(-2)
      seconds = ("0" + date.getSeconds()).slice(-2)

      let mySQLDate = [date.getFullYear(), month, day].join("-");
      let mySQLTime = [hours, minutes, seconds].join(":");
      return [mySQLDate, mySQLTime].join(" ");    
    }

    let data_inicio = changeDate(e);

    this.setState({data_inicio: data_inicio});
  };


  handleDateChangeFim = e => {
    function changeDate(str) {
      var month, day, hours, minutes, seconds, date;

      date = new Date(str)
          month = ("0" + (date.getMonth() + 1)).slice(-2)
          day = ("0" + date.getDate()).slice(-2)
          hours = ("0" + date.getHours()).slice(-2)
          minutes = ("0" + date.getMinutes()).slice(-2)
          seconds = ("0" + date.getSeconds()).slice(-2)

      let mySQLDate = [date.getFullYear(), month, day].join("-");
      let mySQLTime = [hours, minutes, seconds].join(":");
      return [mySQLDate, mySQLTime].join(" ");    
    }

    let data_fim = changeDate(e);

    this.setState({data_fim: data_fim});
  };

  handleChange = e => {    
    this.setState({ [e.target.name]: e.target.value });
  };


  onTagsChange = (event, values) => {
    this.setState({
      tipo: values.label
    });
  }

  onDebitoChange = (event, values) => {
    this.setState({
      movimentacaoDebito: [...this.state.movimentacaoDebito, values]
    });
  }

  onCreditoChange = (event, values) => {
    this.setState({
      movimentacaoCredito: [...this.state.movimentacaoCredito, values]
    });
  }  
  
  handleNegativeBalance = () => {
    this.setState({negativeBalance: !this.state.negativeBalance});
  }
  
  // handleShowCategories = () => {
  //   this.setState({showCategories: !this.state.showCategories, movimentacaoCredito: [], movimentacaoDebito: [], totalDebito: 0, totalCredito: 0});
  // }

  render() {
    let {
      nome,
      descricao,
      data_fim,
      data_inicio,
      negativeBalance
    } = this.state;

    return (
      <div className="m-sm-30">

        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Cursos", path: "/cursos/detalhesCurso" },
              { name: "Criação de aula" }
            ]}
          />
        </div>

        <SimpleCard title="Criação de aula">
          <div>
            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            >

            <Grid container spacing={6}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TextValidator
                  className="mb-4 w-full"
                  label="Nome"
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

            <Grid item lg={12} md={12} sm={12} xs={12} style={{marginBottom: '20px'}}>
                <TextValidator
                  className="mb-4 w-full"
                  label="Descrição"
                  type="text"
                  name="descricao"
                  value={descricao}
                  validators={[
                    "required",
                  ]}
                  errorMessages={["Obrigatório"]}
                />
            </Grid>
            
            
            <div style={{display: 'flex', justifyContent: 'space-between' }}> 
              <Button color="primary" variant="contained" type="submit">
                <Icon>send</Icon>
                <span className="pl-2 capitalize">Criar</span>
              </Button>
              {/* <FormControlLabel
                control={<Checkbox onClick={() => {this.handleShowCategories()}} />}
                label="Desejo acrescentar valores iniciais para essa aula."
              /> */}
              <FormControlLabel
                control={<Checkbox checked={negativeBalance} onClick={() => {this.handleNegativeBalance()}} />}
                label="Permitir saldo negativo nos exercicios dessa aula."
              />
            </div>
            
          </ValidatorForm>
        </div>
        </SimpleCard>
      </div>
    );
  }


  
}

ClassStore.propTypes = {
  user: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  user: state.user,
});

// export default withStyles({}, { withTheme: true })(Dashboard1);

export default withStyles({}, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, {
    })(ClassStore)
  )
);