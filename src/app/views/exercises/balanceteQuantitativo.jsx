import React, { Component, Fragment, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import { 
  Grid, 
  Card, 
  Icon, 
  Fab,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody 
} from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";

import { withStyles } from "@material-ui/styles";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';

import api from "../../services/api";  


const BalanceteQuantitativo = props => {
  
    const [releases, setReleases] = useState([]);

    const {id_class} = props.match.params;
    const {id_exercise} = props.match.params;

    useEffect(() => {
        async function loadBalancoPatrimonial() {

            const response = await api.get(`getReleasesAndAmountByClassExercise/${id_class}/${id_exercise}`);
            setReleases(response.data);

        }

        loadBalancoPatrimonial();
    }, []);

    const table_title = {
        fontWeight: 'bold'
    };

    const table_title_main = {
        fontWeight: 'bold',
        fontSize: '16px'
    }

    return (
        <div className="m-sm-30" >

        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Meus Cursos", path: "#" },
              { name: "Detalhes de curso", path: "#"  },
              { name: "Detalhes de aula", path: "#"  },
              { name: "Detalhes de exercício", path: "#"  },
              { name: "Balancete Quantitativo" }
            ]}
          />
        </div>

        <SimpleCard title="Balancete Quantitativo">

            <label>Ordenado por categoria em ordem alfabética.</label>
            
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell colSpan={2} style={table_title_main}></TableCell>
                        <TableCell align="center" colSpan={2} style={table_title_main}>Saldo inicial</TableCell>
                        <TableCell align="center" colSpan={2} style={table_title_main}>Débito</TableCell>
                        <TableCell align="center" colSpan={2} style={table_title_main}>Crédito</TableCell>
                        <TableCell align="center" colSpan={2} style={table_title_main}>Saldo final</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    
                    <TableRow>
                        <TableCell style={table_title}>Exercicio</TableCell>

                        <TableCell style={table_title}>Conta</TableCell>
                        <TableCell align="center" style={table_title}>Quant. Inicial</TableCell>
                        <TableCell align="center" style={table_title}>Valor Inicial</TableCell>
                        <TableCell align="center" style={table_title}>Quantidade</TableCell>
                        <TableCell align="center" style={table_title}>Valor</TableCell>
                        <TableCell align="center" style={table_title}>Quantidade</TableCell>
                        <TableCell align="center" style={table_title}>Valor</TableCell>
                        <TableCell align="center" style={table_title}>Quantidade</TableCell>
                        <TableCell align="center" style={table_title}>Valor</TableCell>
                    </TableRow>

                    {releases.length > 0 ? 
                    <Fragment>
                        {releases.map((release, index) =>
                            <Fragment>

                            {release.attribute == "quantitativo" && 

                                <TableRow>

                                    {/* CONTA */}
                                    <TableCell className="px-0 capitalize" align="left">
                                        {release.nome_exercicio} 
                                    </TableCell>

                                    {/* CONTA */}
                                    <TableCell className="px-0 capitalize" align="left">
                                        {release.category} ({release.metric})
                                    </TableCell>

                                    {/* QUANTIDADE INICIAL */}
                                    {release.attribute == "financeiro" ? 
                                        <TableCell className="px-0 capitalize" align="center">
                                            <span> - </span>
                                        </TableCell> 
                                    :
                                        <>
                                        {release.initial_amount >= 0 ? 
                                            <TableCell className="px-0 capitalize" align="center">
                                                <span style={{color: '#1b832d'}}>{release.initial_amount}</span>
                                            </TableCell> 
                                            :
                                            <TableCell className="px-0 capitalize" align="center" style={{color: '#555'}}>
                                                <span style={{color: '#F44336'}}>{release.initial_amount}</span>
                                            </TableCell>
                                        }
                                        </>
                                    }
                                
                                    {/* VALOR INICIAL */}
                                    {release.initial_value >= 0 ? 
                                        <TableCell className="px-0 capitalize" align="center">
                                            <span style={{color: '#1b832d'}}>{release.initial_value}</span>
                                        </TableCell> 
                                        :
                                        <TableCell className="px-0 capitalize" align="center" style={{color: '#555'}}>
                                            <span style={{color: '#F44336'}}>{release.initial_value}</span>
                                        </TableCell>
                                    }

                                    {/* QUANTIDADE/VALOR DÉBITO */}
                                    {release.release_type == "D" ? 
                                    <>
                                        {/* QUANTIDADE DÉBITO */}
                                        <TableCell className="px-0 capitalize" align="center">
                                            <span style={{color: release.color}}>{release.amount}</span>
                                        </TableCell> 

                                        {/* VALOR DÉBITO */}
                                        <TableCell className="px-0 capitalize" align="center">
                                            <span style={{color: release.color}}>{release.value}</span>
                                        </TableCell> 
                                    </>                                       
                                    :   
                                        <>
                                            <TableCell className="px-0 capitalize" align="center" style={{color: '#555'}}>
                                                -
                                            </TableCell>

                                            <TableCell className="px-0 capitalize" align="center" style={{color: '#555'}}>
                                                -
                                            </TableCell>
                                        </>
                                    }

                                    {/* QUANTIDADE/VALOR CRÉDITO */}
                                    {release.release_type == "C" ? 
                                    <>
                                        {/* QUANTIDADE CRÉDITO */}
                                        <TableCell className="px-0 capitalize" align="center">
                                            <span style={{color: release.color}}>{release.amount}</span>
                                        </TableCell> 

                                        {/* VALOR DÉBITO */}
                                        <TableCell className="px-0 capitalize" align="center">
                                            <span style={{color: release.color}}>{release.value}</span>
                                        </TableCell> 
                                    </>                                       
                                    :   
                                        <>
                                            <TableCell className="px-0 capitalize" align="center" style={{color: '#555'}}>
                                                -
                                            </TableCell>

                                            <TableCell className="px-0 capitalize" align="center" style={{color: '#555'}}>
                                                -
                                            </TableCell>
                                        </>
                                    }

                                    <TableCell className="px-0 capitalize" align="center">
                                        {release.final_amount}
                                    </TableCell>

                                    <TableCell className="px-0 capitalize" align="center">
                                        {release.final_value}
                                    </TableCell>
                                </TableRow>
                                
                        
                            }
                            
                            </Fragment>   
                            
                        )}  

                    </Fragment>                    

                    :

                    ''
                    }

                    
                </TableBody>
            </Table>
        
        </SimpleCard>

        
      </div>


    );
}

BalanceteQuantitativo.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default withStyles({}, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, {
    })(BalanceteQuantitativo)
  )
);
