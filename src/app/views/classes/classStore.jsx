import React, { Component, Fragment, useEffect, useState } from "react";

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

const ClassStore = props => {
    
  const {id_course} = props.match.params;


  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data_inicio, setData_Inicio] = useState(new Date());
  const [data_fim, setData_Fim] = useState(new Date());
  const [curso, setCurso] = useState({});

    useEffect(() => {
        async function loadCursoAulas() {
            var response = await api.get(`getCursoAulaById/${id_course}`);
            console.log(response);
            // setCurso({idcurso: response.data[0].idcurso, nomecurso: response.data[0].nomecurso});
        }

        loadCursoAulas();
    }, []);


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

   

    async function handleSubmit () {
        
        let dadosAula = {};

        dadosAula.data_inicio = changeDate(data_inicio);
        dadosAula.data_fim = changeDate(data_fim);

        dadosAula.usuario_inclusao = props.user.idusuario;
        dadosAula.data_inclusao = changeDate(new Date());
        dadosAula.curso_idcurso = id_course;
        dadosAula.nome = nome;
        dadosAula.tipo = tipo;
        dadosAula.descricao = descricao;

        console.log(dadosAula);

        const response = await api.post('storeAula', dadosAula);

        props.history.push(`/curso/detalhesCurso/${id_course}`);
    }


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

        <SimpleCard title={`Criação de aula para curso: ${curso.nomecurso}`}>
          <div>
          <ValidatorForm
            onSubmit={handleSubmit}
            onError={errors => null}
          >
            <Grid container spacing={6}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TextValidator
                  className="mb-4 w-full"
                  label="Nome"
                  onChange={e => setNome(e.target.value)}
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
                    // onChange={option => setTipo(option.label)}
                    onChange={(_, value) => { setTipo(value.label) }}
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
                    onChange={e => setData_Inicio(e.target.value)}
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
                    onChange={e => setData_Fim(e)}
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
                  onChange={e => setDescricao(e.target.value)}
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

