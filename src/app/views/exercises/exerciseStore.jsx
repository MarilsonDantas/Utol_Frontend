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
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  SnackbarContent,
} from "@material-ui/core";

import MuiAlert from '@material-ui/lab/Alert';

import "date-fns";
import { Autocomplete } from "@material-ui/lab";

import api from "../../services/api";
import { Fragment } from "react";

class CriarExercicio extends Component {
  
  state = {
    openSnackBar: false,
    negativeBalance: true,

    nome: "",
    idaula: this.props.match.params.id_class,
    descricao: "",
    contasDebito: [],
    contasCredito: [],
    movimentacaoDebito: [],
    movimentacaoCredito: [],
    totalDebito: 0,
    totalCredito: 0,
    historico: "",
    modalDebitoOpen: false,
    modalCreditoOpen: false,
    categoryValue: {},

    
    nomeContaDebito: "",
    valorDebito: "",
    quantidadeDebito: 1,
    valorInicialDebito: 0,
    quantidadeInicialDebito: 0,
    metricaDebito: "",


    nomeContaCredito: "",
    valorCredito: "",
    quantidadeCredito: 1,
    valorInicialCredito: 0,
    quantidadeInicialCredito: 0,
    totalCreditoAux: 0,
    metricaCredito: "",

    totalAux: 0,

  };

  async componentDidMount(){
    const contasPai = await api.get(`getCategoriesFathers`);

    const contasAula = await api.get(`getCategoriesByClass/${this.props.match.params.id_class}`);

    if (contasAula.data.negativeBalance == 0) {
      this.setState({negativeBalance: 0});
    }

    var contasDebitoArray = [];
    var contasCreditoArray = [];

    contasAula.data.plano_contas.forEach(conta => {
      if (conta.type == 'D') {
        contasDebitoArray.push(conta);
      }        
      else {
        contasCreditoArray.push(conta);
      }
    });

    contasPai.data.forEach(conta => {
      if (conta.type == 'D') {
        contasDebitoArray.push(conta);
      }        
      else {
        contasCreditoArray.push(conta);
      }
    });

    const resultDebito  = [ ...contasDebitoArray, ...contasCreditoArray ];
    const resultCredito = [ ...contasCreditoArray, ...contasDebitoArray ];

    this.setState({contasDebito: resultDebito});
    this.setState({contasCredito: resultCredito});
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      descricao,
      historico,
      idaula,
      idprofessor_responsavel,
      movimentacaoCredito,
      movimentacaoDebito,
      nome,
      negativeBalance
    } = this.state;

    let dadosExercicio = {
      descricao,
      historico,
      idaula,
      idprofessor_responsavel,
      movimentacaoCredito,
      movimentacaoDebito,
      nome,
      negativeBalance
    };

    dadosExercicio.usuario_inclusao = this.props.user.idusuario;
    dadosExercicio.idprofessor_responsavel = this.props.user.idusuario;

    delete dadosExercicio.contasCredito;
    delete dadosExercicio.contasDebito;

    const response = await api.post('storeExercicio', dadosExercicio);
    
    if (response.data == "error") {
      this.setState({openSnackBar: true});
    } else {
      this.props.history.push(`/aula/${this.props.match.params.id_class}`);
    }

  };

  handleDebitoReleaseSubmit = async (categoryValue, e) => {
    
    e.preventDefault();

    this.setState({
      movimentacaoDebito: 
      [
        ...this.state.movimentacaoDebito, 
        {...categoryValue, 
          nomeContaDebito: this.state.nomeContaDebito,
          valorDebito: this.state.valorDebito,
          quantidadeDebito: this.state.quantidadeDebito,
          valorInicialDebito: this.state.valorInicialDebito,
          quantidadeInicialDebito: this.state.quantidadeInicialDebito,
          metricaDebito: this.state.metricaDebito
        }
      ],
      modalDebitoOpen: false,
      nomeContaDebito: "",
      valorDebito: "",
      quantidadeDebito: 1,
      valorInicialDebito: 0,
      quantidadeInicialDebito: 0,
    });

    var valorConta = 0;
    var movimentacoesPassadas = [];

    this.state.movimentacaoDebito.forEach(movimentacaoDebito => {
      if (!movimentacaoDebito.quantidadeDebito) 
        movimentacaoDebito.quantidadeDebito = 1;

      if (!movimentacaoDebito.valorInicialDebito) {
        movimentacaoDebito.valorInicialDebito = 0;
        movimentacaoDebito.quantidadeInicialDebito = 0;
      }

      if (movimentacaoDebito.valorDebito && movimentacaoDebito.quantidadeDebito) {
        movimentacoesPassadas = [...movimentacoesPassadas, 
          ((movimentacaoDebito.valorDebito * movimentacaoDebito.quantidadeDebito) + 
          (movimentacaoDebito.valorInicialDebito * movimentacaoDebito.quantidadeInicialDebito))
        ];
      }   

      movimentacaoDebito.isDebito = true;
    });

    valorConta = movimentacoesPassadas.reduce((a, b) => a + b, 0);

    if (valorConta != 0){          
      this.setState({totalDebito: valorConta});
    }

  };

  handleCreditoReleaseSubmit = async (categoryValue, e) => {
    
    e.preventDefault();

    this.setState({
      movimentacaoCredito: 
      [
        ...this.state.movimentacaoCredito, 
        {...categoryValue, 
          nomeContaCredito: this.state.nomeContaCredito,
          valorCredito: this.state.valorCredito,
          quantidadeCredito: this.state.quantidadeCredito,
          valorInicialCredito: this.state.valorInicialCredito,
          quantidadeInicialCredito: this.state.quantidadeInicialCredito,
          metricaCredito: this.state.metricaCredito,          
        }
      ],
      modalCreditoOpen: false,

      nomeContaCredito: "",
      valorCredito: "",
      quantidadeCredito: 1,
      valorInicialCredito: 0,
      quantidadeInicialCredito: 0,
    });
    
    var valorConta = 0;
    var movimentacoesPassadas = [];

    this.state.movimentacaoCredito.forEach(movimentacaoCredito => {
      if (!movimentacaoCredito.quantidadeCredito) 
        movimentacaoCredito.quantidadeCredito = 1;

      if (!movimentacaoCredito.valorInicialCredito) 
        movimentacaoCredito.valorInicialCredito = 0;

      if (movimentacaoCredito.valorCredito && movimentacaoCredito.quantidadeCredito) {
        movimentacoesPassadas = [...movimentacoesPassadas, 
          ((movimentacaoCredito.valorCredito * movimentacaoCredito.quantidadeCredito) + 
          (movimentacaoCredito.valorInicialCredito * movimentacaoCredito.quantidadeInicialCredito))
        ];

      }   

      movimentacaoCredito.isCredito = true;
    });

    valorConta = movimentacoesPassadas.reduce((a, b) => a + b, 0);

    if (valorConta != 0){
      this.setState({totalCredito: valorConta});
    }

  };
 
  modalDebitoOpen = (event, values) => {
    this.setState({
      modalDebitoOpen: true,
      categoryValue: values,
      totalAux: 0
    });
  }

  handleModaDebitoClose = () => {
    this.setState({
      modalDebitoOpen: false,
      totalAux: 0,
      
      nomeContaCredito: "",
      valorCredito: "",
      quantidadeCredito: 1,
      valorInicialCredito: 0,
      quantidadeInicialCredito: 0,

      nomeContaDebito: "",
      valorDebito: "",
      quantidadeDebito: 1,
      valorInicialDebito: 0,
      quantidadeInicialDebito: 0,
    })
  }

  modalCreditoOpen = (event, values) => {
    this.setState({
      modalCreditoOpen: true,
      categoryValue: values,
      totalAux: 0
    });
  }

  handleModalCreditoClose = () => {
    this.setState({
      modalCreditoOpen: false,
      totalAux: 0,

      nomeContaCredito: "",
      valorCredito: "",
      quantidadeCredito: 1,
      valorInicialCredito: 0,
      quantidadeInicialCredito: 0,

      nomeContaDebito: "",
      valorDebito: "",
      quantidadeDebito: 1,
      valorInicialDebito: 0,
      quantidadeInicialDebito: 0,
    })
  }

  onTagsChangeDebito = (event, values) => {
    this.setState({
      metricaDebito: values.label
    });
  }

  onTagsChangeCredito = (event, values) => {
    this.setState({
      metricaCredito: values.label
    });
  }

  handleSnackBarClose = () => {
    this.setState({
      openSnackBar: !this.state.openSnackBar
    });
  }
  
  render() {
    let {
      openSnackBar,

      nome,
      descricao,
      contasDebito,
      contasCredito,
      movimentacaoCredito,
      movimentacaoDebito,
      totalDebito,
      totalCredito,
      historico,
      modalDebitoOpen,
      modalCreditoOpen,
      categoryValue,
      totalAux,

      nomeContaDebito,
      valorDebito,
      quantidadeDebito,

      nomeContaCredito,
      valorCredito,
      quantidadeCredito
    } = this.state;

    return (
      <div className="m-sm-30">

        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Meus Cursos", path: "/dashboard/analytics" },
              { name: "Detalhes de curso", path: "/dashboard/detalhesCurso" },
              { name: "Detalhes de aula", path: "/dashboard/detalhesAula" },
              { name: "Criação de exercício" }
            ]}
          />
        </div>

        <SimpleCard title="Criação de exercício">
          <div>
          <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          >
            <Grid container spacing={6}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextValidator
                  className="mb-4 w-full"
                  label="Título"
                  type="text"
                  name="nome"
                  value={nome}
                  validators={[
                    "required",
                  ]}
                  errorMessages={["O título é obrigatório."]}
                />
              </Grid>
            </Grid>

            <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextValidator
                  className="mb-4 w-full"
                  label="Descrição"
                  type="text"
                  name="descricao"
                  value={descricao}
                  validators={[
                    "required",
                  ]}
                  errorMessages={["A descrição é obrigatória."]}
                />
            </Grid>

            
            <Grid style={{marginBottom: 20}} item lg={12} md={12} sm={12} xs={12}>
                <TextValidator
                  className="mb-4 w-full"
                  label="Histórico"
                  type="text"
                  name="historico"
                  value={historico}
                />
            </Grid>


            <Grid container style={{flexDirection: 'row', justifyContent: 'space-between'}} item lg={12} md={12} sm={12} xs={12} spacing={6}>

               {/* LISTA CONTA DÉBITO */}
              <Grid item lg={6} md={6} sm={12} xs={12}>   
                <Grid container style={{flexDirection: 'row', justifyContent: 'space-between'}} spacing={1} item>

                  <Grid item lg={8} md={8} sm={8} xs={8}>
                    <Autocomplete
                      className="mb-6 w-full"
                      options={contasDebito}
                      onChange={this.modalDebitoOpen}
                      name="tipo"
                      getOptionLabel={option => option.category}
                      renderInput={params => (
                        <TextField
                        {...params}
                        label={"Conta(s) Débito"}
                        variant="outlined"
                        placeholder="Adicione uma conta débito."
                        fullWidth
                        />
                      )}
                    />
                  </Grid>  

                  <Grid item lg={4} md={4} sm={4} xs={4}>
                      <TextField
                        value={totalDebito}
                        label={"Total Débito"}
                        variant="outlined"                        
                        fullWidth
                      />
                  </Grid>   

                </Grid>


                {movimentacaoDebito.length > 0 ? 

                  <div style={{ border: '1px solid #cecece', marginBottom: 20, borderRadius: 3 }} className="overflow-auto">
                    <Table  className="product-table">
                      <TableHead>
                        <TableRow>
                          <TableCell className="px-6" colSpan={2} align="left">
                            Conta
                          </TableCell>
                          <TableCell className="px-0" colSpan={1} align="center">
                            Valor Unitário
                          </TableCell>
                          <TableCell className="px-0" colSpan={1} align="center">
                            Quantidade
                          </TableCell>
                          <TableCell className="px-0" colSpan={1} align="center">
                            Métrica
                          </TableCell>
                          <TableCell className="px-0" colSpan={1} align="center">
                            Val. Inicial
                          </TableCell>
                          <TableCell className="px-0" colSpan={1} align="center">
                            Quant. Inicial
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {movimentacaoDebito.map((movimentacao, index) => {

                          return (
                            <TableRow key={index}>
                            
                              {/* NOME DA CONTA */}
                              {movimentacao.is_father == null ? 
                                
                                <TableCell className="px-0 capitalize" colSpan={2} align="left">
                                  {movimentacao.category}
                                </TableCell>
                                
                                : 
                                
                                <TableCell className="px-0 capitalize" colSpan={2} align="left">
                                  {movimentacao.nomeContaDebito}
                                </TableCell>
                              }

                                
                              {/* VALOR UNITÁRIO */}
                              <TableCell className="px-0" align="center" colSpan={1}>
                                {movimentacao.valorDebito}
                              </TableCell>

                              {/* QUANTIDADE */}
                              {movimentacao.attribute == "quantitativo" ? 


                                <TableCell className="px-0" align="center" colSpan={1}>
                                  {movimentacao.quantidadeDebito}
                                </TableCell>

                              : 
                                                              
                                <TableCell className="px-0" align="center" colSpan={1}>
                                  -
                                </TableCell>
                              }

                              {/* Métrica */}
                              {movimentacao.is_father == null ? 
                              
                                <TableCell className="px-0 capitalize" colSpan={4} align="center" colSpan={1}>
                                  -
                                </TableCell>
                                
                                : 
                                <Fragment>
                                  <TableCell className="px-0" align="center" colSpan={1}>
                                    {movimentacao.metricaDebito}
                                  </TableCell>
                                </Fragment>
                                
                              }

                              {/* VALOR INICIAL */}
                              <TableCell className="px-0" align="center" colSpan={1}>
                                {movimentacao.valorInicialDebito}
                              </TableCell>

                              {/* QUANTIDADE INICIAL */}
                              <TableCell className="px-0" align="center" colSpan={1}>
                                {movimentacao.quantidadeInicialDebito}
                              </TableCell>

                            </TableRow>
                          )


                          
                        })}
                      </TableBody>
                    </Table>
                  </div>
                  : 
                                
                  <div></div>}
                         
                
              </Grid>


              {/* LISTA CONTA CRÉDITO */}
              <Grid item lg={6} md={6} sm={12} xs={12}>                  
                <Grid container style={{flexDirection: 'row', justifyContent: 'space-between'}} spacing={1}>

                  <Grid item lg={8} md={8} sm={8} xs={8}>
                    <Autocomplete
                      className="mb-6 w-full"
                      options={contasCredito}
                      onChange={this.modalCreditoOpen}
                      closeIcon={false}
                      name="tipo"
                      getOptionLabel={option => option.category}
                      renderInput={params => (
                        <TextField
                        {...params}
                        label={"Conta(s) Crédito"}
                        variant="outlined"
                        placeholder="Adicione uma conta crédito."
                        fullWidth
                        />
                      )}
                    />
                  </Grid>  

                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <TextField
                      value={totalCredito}
                      label={"Total Crédito"}
                      variant="outlined"                        
                      fullWidth
                    />
                  </Grid>    

                </Grid>

                {movimentacaoCredito.length > 0 ? 

                <div style={{ border: '1px solid #cecece', marginBottom: 20, borderRadius: 3 }} className="overflow-auto">
                  <Table  className="product-table">
                    <TableHead>
                      <TableRow>
                        <TableCell className="px-6" colSpan={2} align="left">
                          Conta
                        </TableCell>
                        <TableCell className="px-0" colSpan={1} align="center">
                          Valor Unitário
                        </TableCell>
                        <TableCell className="px-0" colSpan={1} align="center">
                          Quantidade
                        </TableCell>
                        <TableCell className="px-0" colSpan={1} align="center">
                          Métrica
                        </TableCell>
                        <TableCell className="px-0" colSpan={1} align="center">
                          Val. Inicial
                        </TableCell>
                        <TableCell className="px-0" colSpan={1} align="center">
                          Quant. Inicial
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {movimentacaoCredito.map((movimentacao, index) => {

                        return (
                          <TableRow key={index}>
                          
                            {/* NOME DA CONTA */}
                            {movimentacao.is_father == null ? 
                              
                              <TableCell className="px-0 capitalize" colSpan={2} align="left">
                                {movimentacao.category}
                              </TableCell>
                              
                              : 
                              
                              <TableCell className="px-0 capitalize" colSpan={2} align="left">
                                {movimentacao.nomeContaCredito}
                              </TableCell>
                            }

                              
                            {/* VALOR UNITÁRIO */}
                            <TableCell className="px-0" align="center" colSpan={1}>
                              {movimentacao.valorCredito}
                            </TableCell>

                            {/* QUANTIDADE */}
                            {movimentacao.attribute == "quantitativo" ? 


                              <TableCell className="px-0" align="center" colSpan={1}>
                                {movimentacao.quantidadeCredito}
                              </TableCell>

                            : 
                                                            
                              <TableCell className="px-0" align="center" colSpan={1}>
                                -
                              </TableCell>
                            }

                            {/* metrica */}
                            {movimentacao.is_father == null ? 
                            
                              <TableCell className="px-0 capitalize" colSpan={4} align="center" colSpan={1}>
                                -
                              </TableCell>
                              
                              : 
                              <Fragment>
                                <TableCell className="px-0" align="center" colSpan={1}>
                                  {movimentacao.metricaCredito}
                                </TableCell>
                              </Fragment>
                              
                            }

                            {/* VALOR INICIAL */}
                            <TableCell className="px-0" align="center" colSpan={1}>
                              {movimentacao.valorInicialCredito}
                            </TableCell>

                            {/* QUANTIDADE INICIAL */}
                            <TableCell className="px-0" align="center" colSpan={1}>
                              {movimentacao.quantidadeInicialCredito}
                            </TableCell>

                          </TableRow>
                        )


                        
                      })}
                    </TableBody>
                  </Table>
                </div>

                : 
                              
                <div></div>}
              </Grid>

            </Grid>  
                        
            <Button color="primary" variant="contained" type="submit">
              <Icon>send</Icon>
              <span className="pl-2 capitalize">Criar Exercício</span>
            </Button>
            </ValidatorForm>
          </div>
        </SimpleCard>


        {/* MODAL DEBITO */}
        <Dialog
          open={modalDebitoOpen}
          onClose={this.handleModaDebitoClose}
          aria-labelledby="form-dialog-title"
        >
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}} >
            <DialogTitle id="form-dialog-title" style={{maxWidth: '350px'}}>Movimentação Débito - {categoryValue.category}</DialogTitle>
            <TextField
              style={{marginTop: '15px', maxWidth: '150px', marginRight: '16px', padding: 0}}
              value={totalAux}
              label={"Total"}
              variant="outlined"
              fullWidth
              padding="0"
            />
          </div>

          <ValidatorForm
            ref="form"
            onSubmit={(event) => {this.handleDebitoReleaseSubmit(categoryValue, event)}}
          > 

            {categoryValue.is_father ?
              <label style={{padding: '16px', paddingBottom: '12px'}} >Digite as informações necessárias para inclusão de nova conta filha.</label>
              :
              <label style={{padding: '16px', paddingBottom: '12px'}} >Digite as informações necessárias para a movimentação da conta filha.</label>
            }

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px', marginBottom: '5px', flexDirection: 'column', marginRight: '16px', marginLeft: '16px'}} >
            
              <Grid container style={{display: 'flex', justifyContent: 'space-between', marginRight: '16px', marginLeft: '16px'}}>

                {categoryValue.is_father ?
                  <>
                  {categoryValue.attribute == "quantitativo" ? 
                    <Grid item lg={5} md={5} sm={12} xs={12} style={{marginTop: '5px', }} >
                      <TextValidator
                        autoFocus
                        variant="outlined"
                        label="Nome da conta"
                        type="text"
                        fullWidth
                        name="nomeContaDebito"
                        onChange={(event) => {this.handleChange(event)}}
                        value={nomeContaDebito}
                        validators={[
                          "required",
                        ]}
                        errorMessages={["O nome da conta é obrigatório."]}
                      />
                    </Grid>
                  : 
                    <Grid item lg={7} md={7} sm={12} xs={12} style={{marginTop: '5px', }} >
                      <TextValidator
                        autoFocus
                        variant="outlined"
                        label="Nome da conta"
                        type="text"
                        fullWidth
                        name="nomeContaDebito"
                        onChange={(event) => {this.handleChange(event)}}
                        value={nomeContaDebito}
                        validators={[
                          "required",
                        ]}
                        errorMessages={["O nome da conta é obrigatório."]}
                      />
                    </Grid>
                  }

                  
                  </>

                  :

                  <Grid item lg={5} md={5} sm={12} xs={12} style={{marginTop: '5px', display: 'flex', flexDirection: 'column'}} >
                    <label style={{fontSize: 17}} >Conta Pai: {categoryValue.category_father}</label>  
                    <label style={{fontSize: 15}}>Conta filha: {categoryValue.category}</label>
                  </Grid>

                }

                {categoryValue.attribute == "quantitativo" ?
                  <>
                    <Grid item lg={3} md={3} sm={12} xs={12} style={{marginTop: '5px', width: '200px'}} >
                      <TextValidator
                        variant="outlined"
                        name="valorDebito"
                        label="Valor"
                        type="text"
                        fullWidth
                        value={valorDebito}
                        onChange={(event) => {this.handleChange(event); this.setState({ totalAux: this.state.totalAux + (this.state.quantidadeDebito * event.target.value) });}}
                        validators={[
                          "required",
                        ]}
                        errorMessages={["Digite um valor."]}
                      />
                    </Grid>

                    <Grid item lg={3} md={3} sm={12} xs={12} style={{marginTop: '5px', }} >
                      <TextValidator
                        variant="outlined"
                        name="quantidadeDebito"
                        label="Quantidade"
                        type="text"
                        fullWidth
                        value={quantidadeDebito}
                        onChange={(event) => {this.handleChange(event); this.setState({ totalAux:  this.state.totalAux + (this.state.valorDebito * event.target.value) });}}
                        validators={[
                          "required",
                        ]}
                        errorMessages={["Obrigatório."]}                        
                      />
                    </Grid>
                  </>

                  :

                  <Grid item lg={4} md={4} sm={12} xs={12} style={{marginTop: '5px', width: '200px'}} >
                    <TextValidator
                      variant="outlined"
                      name="valorDebito"
                      label="Valor"
                      type="text"
                      fullWidth
                      value={valorDebito}
                      onChange={(event) => {this.handleChange(event); this.setState({ totalAux:  this.state.totalAux + (this.state.quantidadeDebito * event.target.value) });}}
                      validators={[
                        "required",
                      ]}
                      errorMessages={["Digite um valor."]}
                    />
                  </Grid>
                }


                

              </Grid>


              {categoryValue.is_father &&

                <Grid container style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '0px', marginRight: '16px', marginLeft: '16px'}}>


                    {categoryValue.attribute == 'financeiro' ? 
                      <Grid item lg={7} md={7} sm={12} xs={12} style={{marginTop: '5px' }}>

                        <Autocomplete
                          className="mb-6 w-full"
                          defaultValue={{ label: 'Financeiro' }}
                          options={[{label: 'Financeiro'}, {label: "Quilograma"}, {label: "Metros"}]}
                          onChange={this.onTagsChangeDebito}
                          className="tipo"
                          getOptionLabel={option => option.label}
                          disabled={true}
                          renderInput={params => (
                            <TextField
                              {...params}
                              label={"Métrica"}
                              variant="outlined"
                              fullWidth
                            />
                          )}
                        />
                      </Grid>
                      :
                      <Grid item lg={4} md={4} sm={12} xs={12} style={{marginTop: '5px' }}>
                        <Autocomplete
                          className="mb-6 w-full"
                          closeIcon={false}
                          options={[{label: 'Financeiro'}, {label: "Quilograma"}, {label: "Metros"}]}
                          onChange={this.onTagsChangeDebito}
                          className="tipo"
                          getOptionLabel={option => option.label}
                          renderInput={params => (
                            <TextField
                              {...params}
                              label={"Métrica"}
                              variant="outlined"
                              fullWidth
                            />
                          )}
                        />  
                      </Grid>                  
                    }

                   
                  

                  <Grid item lg={4} md={4} sm={12} xs={12} style={{marginTop: '5px', }} >
                    <TextValidator
                      variant="outlined"
                      name="valorInicialDebito"
                      label="Valor de saldo inicial"
                      type="text"
                      fullWidth
                      onChange={(event) => {this.handleChange(event); this.setState({ totalAux: this.state.totalAux + (this.state.quantidadeInicialDebito * event.target.value) });}}
                    />
                  </Grid>

                  {categoryValue.attribute == "quantitativo" && 

                  <Grid item lg={3} md={3} sm={12} xs={12} style={{marginTop: '5px', width: '200px'}} >
                    <TextValidator
                      variant="outlined"
                      name="quantidadeInicialDebito"
                      label="Quantidade inicial"
                      type="text"
                      fullWidth
                      onChange={(event) => {this.handleChange(event); this.setState({ totalAux: this.state.totalAux + (this.state.valorInicialDebito * event.target.value) });}}
                    />
                  </Grid>
                  }
                  
                </Grid>
              }

            </div>


          
            <DialogActions>
              <Button variant="outlined" color="primary" type="submit">
                Criar movimentação
              </Button>
              <Button onClick={this.handleModaDebitoClose}>
                Cancelar
              </Button>
            </DialogActions>

          </ValidatorForm>

        </Dialog>


        {/* MODAL CREDITO */}
        
        <Dialog
          open={modalCreditoOpen}
          onClose={this.handleModalCreditoClose}
          aria-labelledby="form-dialog-title"
        >
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}} >
            <DialogTitle id="form-dialog-title">Movimentação Credito - {categoryValue.category}</DialogTitle>
            <TextField
              style={{marginTop: '15px', maxWidth: '150px', marginRight: '16px', padding: 0}}
              value={totalAux}
              label={"Total"}
              variant="outlined"
              fullWidth
              padding="0"
            />
          </div>

          <ValidatorForm
            ref="form"
            onSubmit={(event) => {this.handleCreditoReleaseSubmit(categoryValue, event); console.log("onSubmit Credito")}}
            onError={errors => null}
          > 

            {categoryValue.is_father ?
              <label style={{padding: '16px', paddingBottom: '12px'}} >Digite as informações necessárias para inclusão de nova conta filha.</label>
              :
              <label style={{padding: '16px', paddingBottom: '12px'}} >Digite as informações necessárias para a movimentação da conta filha.</label>
            }

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px', marginBottom: '5px', flexDirection: 'column', marginRight: '16px', marginLeft: '16px'}} >
            
              <Grid container style={{display: 'flex', justifyContent: 'space-between', marginRight: '16px', marginLeft: '16px'}}>

                {categoryValue.is_father ?
                  <>
                  {categoryValue.attribute == "quantitativo" ? 
                    <Grid item lg={5} md={5} sm={12} xs={12} style={{marginTop: '5px', }} >
                      <TextValidator
                        autoFocus
                        variant="outlined"
                        label="Nome da conta"
                        type="text"
                        fullWidth
                        name="nomeContaCredito"
                        onChange={(event) => {this.handleChange(event)}}
                        value={nomeContaCredito}
                        validators={[
                          "required",
                        ]}
                        errorMessages={["O nome da conta é obrigatório."]}
                      />
                    </Grid>
                  : 
                    <Grid item lg={7} md={7} sm={12} xs={12} style={{marginTop: '5px', }} >
                      <TextValidator
                        autoFocus
                        variant="outlined"
                        label="Nome da conta"
                        type="text"
                        fullWidth
                        name="nomeContaCredito"
                        onChange={(event) => {this.handleChange(event)}}
                        value={nomeContaCredito}
                        validators={[
                          "required",
                        ]}
                        errorMessages={["O nome da conta é obrigatório."]}
                      />
                    </Grid>
                  }

                  
                  </>

                  :

                  <Grid item lg={5} md={5} sm={12} xs={12} style={{marginTop: '5px', display: 'flex', flexDirection: 'column'}} >
                    <label style={{fontSize: 17}} >Conta Pai: {categoryValue.category_father}</label>  
                    <label style={{fontSize: 15}}>Conta filha: {categoryValue.category}</label>
                  </Grid>

                }

                {categoryValue.attribute == "quantitativo" ?
                  <>
                    <Grid item lg={3} md={3} sm={12} xs={12} style={{marginTop: '5px', width: '200px'}} >
                      <TextValidator
                        variant="outlined"
                        name="valorCredito"
                        label="Valor"
                        type="text"
                        fullWidth
                        onChange={(event) => {this.handleChange(event); this.setState({ totalAux: this.state.totalAux + (this.state.quantidadeCredito * event.target.value) });}}
                        value={valorCredito}
                        validators={[
                          "required",
                        ]}
                        errorMessages={["Digite um valor."]}
                      />
                    </Grid>

                    <Grid item lg={3} md={3} sm={12} xs={12} style={{marginTop: '5px', }} >
                      <TextValidator
                        variant="outlined"
                        name="quantidadeCredito"
                        label="Quantidade"
                        type="text"
                        fullWidth
                        onChange={(event) => {this.handleChange(event); this.setState({ totalAux: this.state.totalAux + (this.state.valorCredito * event.target.value) });}}
                        value={quantidadeCredito}
                        validators={[
                          "required",
                        ]}
                        errorMessages={["Obrigatório."]}                        
                      />
                    </Grid>
                  </>

                  :

                  <Grid item lg={4} md={4} sm={12} xs={12} style={{marginTop: '5px', width: '200px'}} >
                    <TextValidator
                      variant="outlined"
                      name="valorCredito"
                      label="Valor"
                      type="text"
                      fullWidth
                      onChange={(event) => {this.handleChange(event); this.setState({ totalAux: (this.state.quantidadeCredito * event.target.value) });}}
                      value={valorCredito}
                      validators={[
                        "required",
                      ]}
                      errorMessages={["Digite um valor."]}
                    />
                  </Grid>
                }


                

              </Grid>


              {categoryValue.is_father &&

                <Grid container style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '0px', marginRight: '16px', marginLeft: '16px'}}>

                  <Grid item lg={4} md={4} sm={12} xs={12} style={{marginTop: '5px', }} >
                    <Autocomplete
                      className="mb-6 w-full"
                      options={[{label: 'Financeiro'}, {label: "Quilograma"}, {label: "Metros"}]}
                      onChange={this.onTagsChangeCredito}
                      className="tipo"
                      getOptionLabel={option => option.label}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label={"Métrica"}
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>

                  <Grid item lg={4} md={4} sm={12} xs={12} style={{marginTop: '5px', }} >
                    <TextValidator
                      variant="outlined"
                      name="valorInicialCredito"
                      label="Valor de saldo inicial"
                      type="text"
                      fullWidth
                      onChange={(event) => {this.handleChange(event); this.setState({ totalAux: this.state.totalAux + (this.state.quantidadeInicialCredito * event.target.value) });}}
                    />
                  </Grid>

                  <Grid item lg={3} md={3} sm={12} xs={12} style={{marginTop: '5px', width: '200px'}} >
                    <TextValidator
                      variant="outlined"
                      name="quantidadeInicialCredito"
                      label="Quantidade inicial"
                      type="text"
                      fullWidth
                      onChange={(event) => {this.handleChange(event); this.setState({ totalAux: this.state.totalAux + (this.state.valorInicialCredito * event.target.value) });}}
                    />
                  </Grid>

                  
                </Grid>
              }

            </div>
          
            <DialogActions>
              <Button variant="outlined" color="primary" type="submit">
                Criar movimentação
              </Button>
              <Button onClick={this.handleModalCreditoClose}>
                Cancelar
              </Button>
            </DialogActions>

          </ValidatorForm>

        </Dialog>

        <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={this.handleSnackBarClose}>          
          <MuiAlert elevation={6} variant="filled" onClose={this.handleSnackBarClose} severity="warning">
            Saldo negativo em saldo ou quantidade não é permitido.
          </MuiAlert>
        </Snackbar>

      </div>



    );
  }
}

CriarExercicio.propTypes = {
  user: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  user: state.user,
});

// export default withStyles({}, { withTheme: true })(Dashboard1);

export default withStyles({}, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, {
    })(CriarExercicio)
  )
);