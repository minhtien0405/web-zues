import { createStore } from "vuex";

export default createStore({
  state: {
    dataCollections: [
      {
        id: 1,
        thumbnail: require("@/assets/images/collec-moonbirds.png"),
        title: "Moonbirds",
        desc: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
      },
      {
        id: 2,
        thumbnail: require("@/assets/images/collec-X.png"),
        title: "Clone X - X Takashi Murakami",
        desc: "Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.",
      },
      {
        id: 3,
        thumbnail: require("@/assets/images/collec-mutant.png"),
        title: "Mutant Ape Yacht Club",
        desc: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.",
      },
      {
        id: 4,
        thumbnail: require("@/assets/images/collec-moar.png"),
        title: '"MOAR" by Joan Cornella',
        desc: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
      },
      {
        id: 5,
        thumbnail: require("@/assets/images/collec-doobles.png"),
        title: "Doodles",
        desc: "Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.",
      },
      {
        id: 6,
        thumbnail: require("@/assets/images/collec-kiwami.png"),
        title: "KIWAMI Genesis",
        desc: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.",
      },
      {
        id: 7,
        thumbnail: require("@/assets/images/collec-arcade.png"),
        title: "Arcade Land",
        desc: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
      },
      {
        id: 8,
        thumbnail: require("@/assets/images/collec-goons.png"),
        title: "Goons of Balatroon",
        desc: "Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.",
      },
      {
        id: 9,
        thumbnail: require("@/assets/images/collec-meta.png"),
        title: "Meta Toy DragonZ",
        desc: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.",
      },
    ],
    dataTeams: [
      {
        id: 1,
        thumbnail: require("@/assets/images/team-guy.png"),
        name: "Guy Hawkins",
        position: "CEO",
      },
      {
        id: 2,
        thumbnail: require("@/assets/images/team-jane.png"),
        name: "Jane Cooper",
        position: "COO",
      },
      {
        id: 3,
        thumbnail: require("@/assets/images/team-darrell.png"),
        name: "Darrell Steward",
        position: "CTO",
      },
      {
        id: 4,
        thumbnail: require("@/assets/images/team-dianne.png"),
        name: "Dianne Russell",
        position: "CDO",
      },
    ],
   
    dataProvides: [
      {
        id: 1,
        thumbnail: require("@/assets/images/provide-host.png"),
        name: "Host your NFTs",
        position: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
      },
      {
        id: 2,
        thumbnail: require("@/assets/images/provide-see.png"),
        name: "See your sales",
        position: "Integer ante non nunc, eget est justo vel semper nunc. Lacus ",
      },
      {
        id: 3,
        thumbnail: require("@/assets/images/provide-secure.png"),
        name: "Secure wallet",
        position: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
      },
      {
        id: 4,
        thumbnail: require("@/assets/images/provide-scam.png"),
        name: "No scam",
        position: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
      },
    ],
   
    dataTestimonials:[
      {
        id: 1,
        img: require("@/assets/images/avatar-brooklyn.png"),
        name: 'Brooklyn Simmons',
        mail:'@brooklynsimmons',
        comment: 'Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.'
      },
      {
        id: 2,
        img: require("@/assets/images/avatar-esther.png"),
        name: 'Esther Howard',
        mail:'@brooklynsimmons',
        comment: 'Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.'
      },
      {
        id: 3,
        img: require("@/assets/images/avatar-kristin.png"),
        name: 'Kristin Watson',
        mail:'@KristinWatson',
        comment: 'Lectus dolor fermentum gravida ut sit vel. Enim. Lorem ipsum will never be the same again so purchase Zeus UI now or web trying.'
      },
      {
        id: 4,
        img: require("@/assets/images/avatar-dianne.png"),
        name: 'Dianne Russell',
        mail:'@DianneRussell',
        comment: 'Eu luctus tincidunt vulputate praesent interdum proin. Magna gravida at pretium vitae. Viverra.'
      },
      {
        id: 5,
        img: require("@/assets/images/avatar-arlene.png"),
        name: 'Arlene McCoy',
        mail:'@ArleneMcCoy',
        comment: 'Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.'
      },
      {
        id: 6,
        img: require("@/assets/images/avatar-leslie.png"),
        name: 'Leslie Alexande',
        mail:'@LeslieAlexander',
        comment: 'Varius bibendum quis ipsum sit. Enim ante donec erat neque semper. Consectetur sed imperdiet tortor duis nulla aliquet at integer. '
      },
      {
        id: 7,
        img: require("@/assets/images/avatar-eleanor.png"),
        name: 'Eleanor Pena',
        mail:'@EleanorPena',
        comment: 'Amet quam velit nisl et et. Fusce ante facilisi vulputate eget aliquet mi sem eu vulputate.'
      },
      {
        id: 8,
        img: require("@/assets/images/avatar-jane.png"),
        name: 'Jane Cooper',
        mail:'@JaneCooper',
        comment: 'Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis.'
      },
      {
        id: 9,
        img: require("@/assets/images/avatar-darlene.png"),
        name: 'Darlene Robertson',
        mail:'@DarleneRobertson',
        comment: 'Imperdiet sed tellus tempor vitae elit a. Arcu a.'
      },
    ],

    dataAskeds: [
      {
        id: 1,
        question:'What kind of websites I can build with Zeus UI?',
        asked: 'Rhoncus sed facilisi sed amet. Tristique commodo sodales.',
        drop: false
      },
      {
        id: 2,
        question:'Can I use Zeus UI in commercial projects?',
        asked: 'Rhoncus sed facilisi sed amet. Tristique commodo sodales.',
        drop: false
      },
      {
        id: 3,
        question:'Can I use Zeus UI in commercial projects?',
        asked: 'Rhoncus sed facilisi sed amet. Tristique commodo sodales.',
        drop: false
      },
      {
        id: 4,
        question:'Can I resell Zeus UI?',
        asked: 'Rhoncus sed facilisi sed amet. Tristique commodo sodales.',
        drop: false
      },
      {
        id: 5,
        question:'How much does Zeus UI cost?',
        asked: 'This FAQ section is now in the expanded state, so you see how it looks. Rhoncus sed facilisi sed amet. Tristique commodo sodales.',
        drop: false
      },
      {
        id: 6,
        question:'Could you make me a website using Zeus UI?',
        asked: 'This FAQ section is now in the expanded state, so you see how it looks. Rhoncus sed facilisi sed amet. Tristique commodo sodales.',
        drop: false
      },
    ],
   numId: 0,
   valueTitle: '',
   valueDesc: '',
   idCollec: 0,
   newDataCollec: [
    {
      id: 1,
      thumbnail: require("@/assets/images/collec-moonbirds.png"),
      title: "Moonbirds",
      desc: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
    },
    {
      id: 2,
      thumbnail: require("@/assets/images/collec-X.png"),
      title: "Clone X - X Takashi Murakami",
      desc: "Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.",
    },
    {
      id: 3,
      thumbnail: require("@/assets/images/collec-mutant.png"),
      title: "Mutant Ape Yacht Club",
      desc: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.",
    },
    {
      id: 4,
      thumbnail: require("@/assets/images/collec-moar.png"),
      title: '"MOAR" by Joan Cornella',
      desc: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
    },
    {
      id: 5,
      thumbnail: require("@/assets/images/collec-doobles.png"),
      title: "Doodles",
      desc: "Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.",
    },
    {
      id: 6,
      thumbnail: require("@/assets/images/collec-kiwami.png"),
      title: "KIWAMI Genesis",
      desc: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.",
    },
    {
      id: 7,
      thumbnail: require("@/assets/images/collec-arcade.png"),
      title: "Arcade Land",
      desc: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
    },
    {
      id: 8,
      thumbnail: require("@/assets/images/collec-goons.png"),
      title: "Goons of Balatroon",
      desc: "Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.",
    },
    {
      id: 9,
      thumbnail: require("@/assets/images/collec-meta.png"),
      title: "Meta Toy DragonZ",
      desc: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.",
    },
  ],

  },
  getters: {
    dataCollections: (state) => state.dataCollections,
    dataTeams: state => state.dataTeams,
    dataProvides: state => state.dataProvides,
    dataTestimonials: state => state.dataTestimonials,
    dataAskeds: state => state.dataAskeds,
    datatest: state => state.datatest,
    valueTitle: state => state.valueTitle,
    valueDesc: state => state.valueDesc,
    idCollec: state => state.idCollec

  },
  mutations: {
    checkDrop(state,numId){
      state.dataAskeds.map((dataAsked) =>{
        if(dataAsked.id === numId){
          dataAsked.drop = !dataAsked.drop
        }
      })
    },
    // Edit collection
    setIdEdit(state,id){
      state.idCollec = id
      state.valueTitle = state.dataCollections[id-1].title
      state.valueDesc = state.dataCollections[id-1].desc
    },
    setValueTitle(state, value){
      state.dataCollections.map((dataCollection) =>{
        if(dataCollection.id === state.idCollec){
          dataCollection.title = value
        }
      })
    },
    setValueDesc(state, value){
      state.dataCollections.map((dataCollection) =>{
        if(dataCollection.id === state.idCollec){
          dataCollection.desc = value
        }
      })
    },
    deleteCollection(state, id){
      let index = state.dataCollections.findIndex((dataCollection) => dataCollection.id === id)
      state.dataCollections.splice(index, 1)
    },
    getFind(state, textFind){
      if(textFind != ''){
      state.dataCollections = state.newDataCollec
      state.dataCollections = state.dataCollections.filter((data) =>
      data.title.toLowerCase().includes(textFind.toLowerCase())
      )}
      else{
         state.dataCollections = state.newDataCollec
      }
      console
    }
  },
  actions: {
    clickDrop(context, numId){
          context.commit('checkDrop',numId)
    },
    // Edit collection
    getIdEdit({commit}, id){
       commit('setIdEdit', id)
    },
    getIdDelete({commit}, id){
       commit('deleteCollection', id)
    },
    findCollections({commit}, textFind){
       commit('getFind', textFind)
    },

  },
});
