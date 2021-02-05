import React, { Component } from "react";

import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

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
  TableBody 
} from "@material-ui/core";

import "date-fns";
import { Autocomplete } from "@material-ui/lab";

import api from "../../services/api";

class Exercicio extends Component {
  state = {
    nome: "",
    tipo: "",
    descricao: "",
    contas: [],
    movimentacaoDebito: [],
    movimentacaoCredito: [],
    totalDebito: 0,
    totalCredito: 0,
  };

  async componentDidMount(){
    const contas = await api.get(`getNomePlanoDeContas`);

    this.setState({contas: contas.data});
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const name = this._name.value;

    console.log(event.target);

    console.log(this.el);

    const dadosCurso = this.state;

    dadosCurso.usuario_inclusao = this.props.user.idusuario;
    dadosCurso.idprofessor_responsavel = this.props.user.idusuario;

    const response = await api.post('storeCurso', dadosCurso);

    
  };

  handleChange = e => {
    
    if (["valorDebito", "quantidadeDebito"].includes(e.target.className) ) {
      
      let movimentacaoDebito = [...this.state.movimentacaoDebito]
      movimentacaoDebito[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
      this.setState({ movimentacaoDebito }, () => console.log("Debito",this.state.movimentacaoDebito));

      var valorConta = 0;
      var movimentacoesPassadas = [];

      this.state.movimentacaoDebito.forEach(movimentacaoDebito => {
        if (movimentacaoDebito.valorDebito && movimentacaoDebito.quantidadeDebito) {
          movimentacoesPassadas = [...movimentacoesPassadas, (movimentacaoDebito.valorDebito * movimentacaoDebito.quantidadeDebito)];
        }   
      });

      valorConta = movimentacoesPassadas.reduce((a, b) => a + b, 0);

      if (valorConta != 0){          
        this.setState({totalDebito: valorConta});
      }
      
    }
    else if (["valorCredito", "quantidadeCredito"].includes(e.target.className) ) {
      
      let movimentacaoCredito = [...this.state.movimentacaoCredito]
      movimentacaoCredito[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
      this.setState({ movimentacaoCredito }, () => console.log("Credito",this.state.movimentacaoCredito))

      var valorConta = 0;
      var movimentacoesPassadas = [];

      this.state.movimentacaoCredito.forEach(movimentacaoCredito => {
        if (movimentacaoCredito.valorCredito && movimentacaoCredito.quantidadeCredito) {
          movimentacoesPassadas = [...movimentacoesPassadas, (movimentacaoCredito.valorCredito * movimentacaoCredito.quantidadeCredito)];
        }   
      });

      valorConta = movimentacoesPassadas.reduce((a, b) => a + b, 0);

      if (valorConta != 0){          
        this.setState({totalCredito: valorConta});
      }
      
    }
    else {
        this.setState({ [e.target.name]: e.target.value });
    }

  };

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
  
  render() {
    let {
      nome,
      descricao,
      contas,
      movimentacaoCredito,
      movimentacaoDebito,
      totalDebito,
      totalCredito
    } = this.state;

    const {exercicio} = this.props.location.state;

    return (
      <div className="m-sm-30">

        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Meus Cursos", path: "/dashboard/analytics" },
              { name: "Detalhes de curso", path: "/dashboard/detalhesCurso" },
              { name: "Detalhes de aula", path: "/dashboard/detalhesAula" },
              { name: "Exercício" }
            ]}
          />
        </div>

        <SimpleCard title={`${exercicio.nome}`}>
          <div>
          <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            onError={errors => null}
          >
            <Grid container spacing={6}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextValidator
                  className="mb-4 w-full"
                  label="Título"
                  type="text"
                  name="nome"
                  value={`${exercicio.nome}`}
                />
              </Grid>
            </Grid>

            <Grid style={{marginBottom: 20}} item lg={12} md={12} sm={12} xs={12}>
                <TextValidator
                  className="mb-4 w-full"
                  label="Descrição"
                  type="text"
                  name="descricao"
                  value={`${exercicio.descricao}`}
                />
            </Grid>


            <Grid container style={{flexDirection: 'row', justifyContent: 'space-between'}} item lg={12} md={12} sm={12} xs={12} spacing={6}>

              <Grid item  item lg={6} md={6} sm={12} xs={12}>   
                <Grid container style={{flexDirection: 'row', justifyContent: 'space-between'}} spacing={1} item>

                  <Grid item lg={8} md={8} sm={8} xs={8}>
                    <Autocomplete
                      className="mb-6 w-full"
                      options={contas}
                      onChange={this.onDebitoChange}
                      name="tipo"
                      getOptionLabel={option => option.nome}
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
                          <TableCell className="px-6" colSpan={4}>
                            Conta
                          </TableCell>
                          <TableCell className="px-0" colSpan={2}>
                            Valor
                          </TableCell>
                          <TableCell className="px-0" colSpan={2}>
                            Atributo
                          </TableCell>
                          <TableCell className="px-0" colSpan={1}>
                            Ação
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {movimentacaoDebito.map((movimentacao, index) => {
                          let movimentacaoDebitoValor = `valorDebito-${index}`, movimentacaoDebitoQuantidade = `quantidadeDebito-${index}`;

                          return (

                            <TableRow key={index}>
                            
                              <TableCell className="px-0 capitalize" colSpan={4} align="left">
                                {movimentacao.nome}           
                              </TableCell>

                              <TableCell className="px-0" align="left" colSpan={2}>

                                <input
                                  // InputProps={{ disableUnderline: true }}
                                  style={{border: '1px solid #cecece', borderRadius: 3, padding: 5, width: '80%' }}
                                  type="text"
                                  data-id={index}
                                  name={movimentacaoDebitoValor}
                                  id={movimentacaoDebitoValor}
                                  value={movimentacaoDebito[index].name} 
                                  placeholder={"Digite valor"}
                                  className="valorDebito"
                                />                                
                              </TableCell>

                              <TableCell className="px-0" align="left" colSpan={2}>
                                <input
                                  style={{border: '1px solid #cecece', borderRadius: 3, padding: 5, width: '80%' }}
                                  data-id={index}
                                  name={movimentacaoDebitoQuantidade}
                                  id={movimentacaoDebitoQuantidade}
                                  value={movimentacaoDebito[index].name} 
                                  placeholder={"Digite quantidade"}
                                  className="quantidadeDebito"
                                />
                              </TableCell>

                              <TableCell className="px-0" colSpan={1}>
                                <IconButton>
                                  <Icon color="primary">edit</Icon>
                                </IconButton>
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

              {/* CONTA CRÉDITO */}
              <Grid item  item lg={6} md={6} sm={12} xs={12}>                  
                <Grid container style={{flexDirection: 'row', justifyContent: 'space-between'}} spacing={1} item>

                  <Grid item lg={8} md={8} sm={8} xs={8}>
                    <Autocomplete
                      className="mb-6 w-full"
                      options={contas}
                      onChange={this.onCreditoChange}
                      name="tipo"
                      getOptionLabel={option => option.nome}
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
                          <TableCell className="px-6" colSpan={4}>
                            Conta
                          </TableCell>
                          <TableCell className="px-0" colSpan={2}>
                            Valor
                          </TableCell>
                          <TableCell className="px-0" colSpan={2}>
                            Quantidade
                          </TableCell>
                          <TableCell className="px-0" colSpan={1}>
                            Ação
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {movimentacaoCredito.map((movimentacao, index) => {
                          let movimentacaoCreditoValor = `valorCredito-${index}`, movimentacaoCreditoquantidade = `quantidadeCredito-${index}`;

                          return (

                            <TableRow key={index}>
                            
                              <TableCell className="px-0 capitalize" colSpan={4} align="left">
                                {movimentacao.nome}           
                              </TableCell>

                              <TableCell className="px-0" align="left" colSpan={2}>

                                <input
                                  // InputProps={{ disableUnderline: true }}
                                  style={{border: '1px solid #cecece', borderRadius: 3, padding: 5, width: '80%' }}
                                  type="text"
                                  data-id={index}
                                  name={movimentacaoCreditoValor}
                                  id={movimentacaoCreditoValor}
                                  value={movimentacaoCredito[index].name} 
                                  className="valorCredito"
                                />                                
                              </TableCell>

                              <TableCell className="px-0" align="left" colSpan={2}>
                                <input
                                  style={{border: '1px solid #cecece', borderRadius: 3, padding: 5, width: '80%' }}
                                  data-id={index}
                                  name={movimentacaoCreditoquantidade}
                                  id={movimentacaoCreditoquantidade}
                                  value={movimentacaoCredito[index].name} 
                                  className="quantidadeCredito"
                                />
                              </TableCell>

                              <TableCell className="px-0" colSpan={1}>
                                <IconButton>
                                  <Icon color="primary">edit</Icon>
                                </IconButton>
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
              <span className="pl-2 capitalize">Enviar resposta</span>
            </Button>
          </ValidatorForm>
        </div>
        </SimpleCard>
      </div>
    );
  }
}



Exercicio.propTypes = {
  user: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  user: state.user,
});

// export default withStyles({}, { withTheme: true })(Dashboard1);

export default withStyles({}, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, {
    })(Exercicio)
  )
);