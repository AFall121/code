<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <v-container>
      <v-layout row class="ma-4">
        <v-app style="background-color:grey lighten-1;" class="rounded-xl">
          <v-row>
            <v-col cols="12" md="8" class="border-r-lighten">
              <v-container>
                <v-row>
                  <v-col cols="12" md="9" offset-md="1">
                    <v-text-field label="Search" prepend-inner-icon="search"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2" align="center" justify="center">
                    <v-badge color="error" overlap class="mt-5">
                      <template slot="badge">2</template>
                      <v-icon color="tertiary">mdi-bell</v-icon>
                    </v-badge>
                  </v-col>
                  <v-col cols="12" md="12">
                    <h1 class="headline mb-2 grey--text">Money Status</h1>
                    <template>
                      <div id="app">
                        <GChart type="ColumnChart"
                          :data="chartData"
                          :options="chartOptions"
                        />
                      </div>
                    </template>
                  </v-col>
                  <v-col cols="12" md12>
                    <h1 class="headline mb-2 grey--text">Budgets</h1>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-card>
                      <v-list>
                        <v-list-item>
                          <v-list-item-avatar color="blue">
                            <v-icon dark>fas fa-car</v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>Auto & transport</v-list-item-title>
                            <v-list-item-subtitle>$700 left</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align-right>
                            <v-list-item-title class="indigo--text">$1,200</v-list-item-title>
                            <v-list-item-subtitle>$500 of 1,200</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                        <v-list-item>
                          <v-list-item-avatar color="red">
                            <v-icon dark>fas fa-utensils</v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>Food & drinks</v-list-item-title>
                            <v-list-item-subtitle>$2,100 left</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align-right>
                            <v-list-item-title class="indigo--text">$3,100</v-list-item-title>
                            <v-list-item-subtitle>$200 of 2,200</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                        <v-list-item>
                          <v-list-item-avatar color="orange">
                            <v-icon dark>fas fa-dumbbell</v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>Sport</v-list-item-title>
                            <v-list-item-subtitle>$300 left</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align-right>
                            <v-list-item-title class="indigo--text">$950</v-list-item-title>
                            <v-list-item-subtitle>$600 of 950</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                        <v-list-item>
                          <v-list-item-avatar color="green">
                            <v-icon dark>fas fa-gamepad</v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>Game</v-list-item-title>
                            <v-list-item-subtitle>$120 left</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align-right>
                            <v-list-item-title class="indigo--text">$300</v-list-item-title>
                            <v-list-item-subtitle>$40 of 300</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                        <v-list-item>
                          <v-list-item-avatar color="blue">
                            <v-icon dark>fas fa-car</v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>Auto & transport</v-list-item-title>
                            <v-list-item-subtitle>$700 left</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align-right>
                            <v-list-item-title class="indigo--text">$1,200</v-list-item-title>
                            <v-list-item-subtitle>$500 of 1,200</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                      </v-list>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-card class="mx-auto" max-height="400">
                      <v-img class="white--text align-end" height="150px" src="https://tse3-mm.cn.bing.net/th/id/OIP.eXGZLubcMADtp7EU0n6TSQHaFj?pid=Api&rs=1"></v-img>
                      <v-card-title class="pb-0">Cash loan</v-card-title>
                      <v-card-text class="text-primary">
                        <div>Up to 2 million dollars</div>
                        <div>Money the next date. Rate</div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
            <v-col cols="12" md="4">
              <v-container>
                <v-row>
                  <v-col cols="12" md12>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img src="img1.png"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>Vuetify go</v-list-item-title>
                        <v-list-item-subtitle>learnvuetify</v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon>fas fa-sign-out-alt</v-icon>
                      </v-list-item-action>
                    </v-list-item>
                    <v-divider></v-divider>
                  </v-col>
                  <v-col cols="12" md12>
                    <v-list-item>
                      <v-list-item-avatar color="grey">
                        <v-icon color="white">fas fa-dollar-sign</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-tile>
                          Heisenberg
                        </v-list-item-tile>
                        <v-list-item-subtitle>
                          $ 15,423
                        </v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon color="indigo" large>fab fa-cc-visa</v-icon>
                      </v-list-item-action>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-avatar color="grey">
                        <v-icon color="white">fas fa-dollar-sign</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-tile>
                          Stone River wallet
                        </v-list-item-tile>
                        <v-list-item-subtitle>
                          $ 5,423
                        </v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon color="indigo" large>fab fa-cc-paypal</v-icon>
                      </v-list-item-action>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-avatar color="grey">
                        <v-icon color="white">fas fa-dollar-sign</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-tile>
                          Heisenberg
                        </v-list-item-tile>
                        <v-list-item-subtitle>
                          $ 15,423
                        </v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon color="indigo" large>fab fa-cc-visa</v-icon>
                      </v-list-item-action>
                    </v-list-item>
                    <v-col cols="12" md="12">
                      <v-list-item>
                        <v-list-item-avatar color="red">
                          <v-icon color="white" large>fas fa-plus</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          Add credit card
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                    <v-col cols="12" md12>
                      <v-card color="#952175">
                        <div class="d-flex flex-no-wrap justify-space-between">
                          <div>
                            <v-card-title class="headline">Upgrade your plan to Gold</v-card-title>
                            <v-card-subtitle>With Gold account plan you get access to prenium features</v-card-subtitle>
                          </div>
                          <v-avatar class="ma-3" size="100" tile>
                            <v-img src="https://tse1-mm.cn.bing.net/th/id/OIP.HNGIYDQu5WuhIwhQkadcXwHaFj?w=230&h=180&c=7&o=5&pid=1.7"></v-img>
                          </v-avatar>
                        </div>
                      </v-card>
                    </v-col>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-app>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data:() =>({
    chartData:[
      ["Year","Sales","Expenses","Profit"],
      ["2014",1000,400,200],
      ["2015",1170,460,250],
      ["2016",666,200,200],
      ["2017",1030,400,300],
      ["2018",1200,600,200],
      ["2019",1300,300,200],
    ],
    chartOptions:{
      chart:{
        title:"Company Performance",
        subtitle:"Sales,Express,and Profit:2016-2019"
      }
    },
  }),
  components: {

  },
  mounted(){
    console.log(this.$vuetify.theme.themes.dark)
  },
  computed:{
    theme(){
      return (this.$vuetify.themes.dark) ? 'dark' :'light'
    }
  }
}
</script>

<style scoped>
.border-r-lighten{
  border-right: 1px solid #95a5a6;
}
</style>