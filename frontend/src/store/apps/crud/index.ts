// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

// ** Axios Imports
import produce from 'immer'

export const appCrudSlice = createSlice({
  name: 'appCrud',
  initialState: {
    // action id
    actionId: 0,

    // pagination
    pagination: {
      count: 0,
      data: [],
      activePage: 1
    },

    // page header
    pageHeader: {
      title: '',
      subTitle: ''
    },

    // table header
    tableHeader: [],

    // add form
    addForm: [],

    // search form
    searchForm: [],

    // detail form
    detailForm: [],

    // action list
    actionList: [],

    // action form
    actionForm: [],

    // list API
    listAPI: null,

    // create API
    createAPI: null,

    // detail API
    detailAPI: null,

    // delete API
    deleteAPI: null,

    // update API
    updateAPI: null
  },
  reducers: {
    setActionId(state, action) {
      state.actionId = action.payload.actionId
    },
    setPagination(state, action) {
      state.pagination = action.payload
    },
    setPageHeader(state, action) {
      state.pageHeader = action.payload
    },
    setTableHeader(state, action) {
      state.tableHeader = action.payload
    },
    setAddForm(state, action) {
      state.addForm = action.payload
    },
    setSearchForm(state, action) {
      state.searchForm = action.payload
    },
    setDetailForm(state, action) {
      state.detailForm = action.payload
    },
    setActionList(state, action) {
      state.actionList = action.payload
    },
    setActionForm(state, action) {
      state.actionForm = action.payload
    },
    initAddForm(state) {
      const nextState = produce(state.addForm, (draftState) => {
        draftState.map((item) => {
          item.value = ''
        })
      })
      state.addForm = nextState
    },
    updateAddForm(state, action) {
      const nextState = produce(state.addForm, (draftState) => {
        draftState.map((item) => {
          if (item.key === action.payload.key) {
            item.value = action.payload.value
          }
        })
      })
      state.addForm = nextState
    },
    updateActionForm(state, action) {
      const nextState = produce(state.actionForm, (draftState) => {
        draftState.map((item) => {
          if (item.key === action.payload.key) {
            item.value = action.payload.value
          }
        })
      })
      state.actionForm = nextState
    },
    initSearchForm(state) {
      const nextState = produce(state.searchForm, (draftState) => {
        draftState.map((item) => {
          item.value = ''
        })
      })
      state.searchForm = nextState
    },
    updateSearchForm(state, action) {
      const nextState = produce(state.searchForm, (draftState) => {
        draftState.map((item) => {
          if (item.key === action.payload.key) {
            item.value = action.payload.value
          }
        })
      })
      state.searchForm = nextState
    },
    setListAPI(state, action) {
      state.listAPI = action.payload
    },
    setCreateAPI(state, action) {
      state.createAPI = action.payload
    },
    setDetailAPI(state, action) {
      state.detailAPI = action.payload
    },
    setDeleteAPI(state, action) {
      state.deleteAPI = action.payload
    },
    setUpdateAPI(state, action) {
      state.updateAPI = action.payload
    }
  }
})

export const {
  setActionId,
  setPagination,
  setTableHeader,
  setPageHeader,
  setAddForm,
  setSearchForm,
  setDetailForm,
  setActionList,
  setActionForm,
  initAddForm,
  updateAddForm,
  updateActionForm,
  initSearchForm,
  updateSearchForm,
  setListAPI,
  setCreateAPI,
  setDetailAPI,
  setDeleteAPI,
  setUpdateAPI
} = appCrudSlice.actions

export default appCrudSlice.reducer
