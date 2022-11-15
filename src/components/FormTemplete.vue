<template>
  <form name="form1" id="form1" autocomplete="off" v-on:submit="checkSubmit">
    <div class="form1_outer">
      <div id="form1_title">
        <h3>FORM</h3>
      </div>
      <div class="store_piece">
        <label for="store">store <span>*</span></label>
        <div class="storeGroup">
          <input v-model="inputValue.store" type="text" name="store" id="store" placeholder="placeholder text" @input="checkStore" />
          <div class="arrow"></div>
        </div>
        <div class="store_option" v-if="isShow">
          <ul>
            <template v-for="store in results">
              <li :key="store" @click="setStore(store)">{{ store }}</li>
            </template>
          </ul>
        </div>
        <div id="help"></div>
      </div>
      <div>
        <label for="name">name <span>*</span></label>
        <input v-model="inputValue.name" type="text" name="name" id="name" placeholder="placeholder text" />
        <div id="help"></div>
      </div>
      <div>
        <label for="phone">phone <span>*</span></label>
        <input v-model="inputValue.phone" type="number" id="phone" placeholder="placeholder text" maxlength="10" name="phone" />
        <div id="help"></div>
      </div>
      <div>
        <label for="amout">Amount of consumption <span>*</span></label>
        <input v-model="inputValue.amout" type="number" name="amout" id="amout" min="0" placeholder="placeholder text" />
        <div id="help"></div>
      </div>
      <div>
        <label>payment <span>*</span></label>
        <div class="selectGroup">
          <select class="form-control" name="payment">
            <option value="0" selected>digital payment</option>
            <option value="1">ATM</option>
          </select>
          <div class="arrow"></div>
        </div>
        <div id="help"></div>
      </div>
    </div>

    <ButtonTemplete :text="'submit'">
      <template v-slot:btn_contain>
        <div v-if="isSubmit.send">
          <template v-if="isSubmit.isOk">
            <img src="@/assets/images/success.png" alt="" />
            <div>success</div>
          </template>
          <template v-else>
            <img src="@/assets/images/failure.png" alt="" />
            <div>failure</div>
          </template>
        </div>
        <div v-else>submit</div>
      </template>
    </ButtonTemplete>
    <div id="submit_help">
      <template v-if="isSubmit.send && !isSubmit.isOk"> This person does not exist </template>
      <template v-else></template>
    </div>
  </form>
</template>

<script>
import stores from './../data/stores.json'
import ButtonTemplete from './ButtonTemplete.vue'

export default {
  name: 'FormTemplete',
  components: {
    ButtonTemplete,
  },
  data() {
    return {
      inputValue: {
        store: '',
        name: '',
        phone: '',
        amout: null,
      },
      results: [],
      isShow: false,
      isSubmit: {
        send: false,
        isOk: false,
      },
      storesData: [...stores],
    }
  },
  mounted() {
    $('input').on('keyup keypress blur change keydown', function (e) {
      const event = e.type

      const type = $(this).attr('type')
      const id = $(this).attr('id')

      if (type == 'number') {
        if (e.which != 8 && e.which != 0) {
          let copyVal = $(this).val()

          switch (id) {
            case 'phone':
              // block input + - e
              if (e.which == 109 || e.which == 45 || e.which == 107 || e.which == 43 || e.which == 101 || e.which == 69) {
                return false
              }
              if ($(this).val().length < 10) {
                for (let i = 0; i < $(this).val().length; i++) {
                  let word = $(this).val()[i]

                  if ((i == 0 && word !== '0') || (i == 1 && word !== '9')) {
                    $(this).css({ border: '1px solid #E06D6D', 'box-shadow': 'inset 0 0 0 2px #E06D6D' }).siblings('#help').text('wrong format')
                    return false
                  } else {
                    $(this).css({ border: '1px solid #204379', 'box-shadow': 'inset 0 0 0 2px transparent' }).siblings('#help').text('')
                  }
                }
              } else {
                return false
              }

              break
            case 'amout':
              // block input + - e
              if (e.which == 109 || e.which == 45 || e.which == 107 || e.which == 43 || e.which == 101 || e.which == 69) {
                return false
              }
              for (let i = 0; i < $(this).val().length; i++) {
                let word = $(this).val()[i]
                if (i == 0 && word == '0') {
                  $(this).val(`${parseInt(copyVal)}`)
                  if ($(this).val() != '') {
                    $(this).css({ border: '1px solid #204379', 'box-shadow': 'inset 0 0 0 2px transparent' })
                  }
                } else {
                  $(this).css({ border: '1px solid #204379', 'box-shadow': 'inset 0 0 0 2px transparent' }).siblings('#help').text('')
                }
              }
              break
          }
        }
      }

      if (type == 'text') {
        // const reg=/^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$/
        const reg = /[\d"'<>%;)(&+\[\]]/

        if (e.which != 8 && e.which != 0) {
          switch (id) {
            case 'name':
              $(this).val($(this).val().replace(reg, ''))
              if (event == 'keydown' && $(this).val().length > 39) {
                return false
              } else {
                $(this).css({ border: '1px solid #204379', 'box-shadow': 'inset 0 0 0 2px transparent' }).siblings('#help').text('')
              }
              break
          }
        }
      }
    })
  },
  watch: {
    store: {
      deep: true,
      handler: function (newVal) {
        this.inputValue.store = newVal
      },
    },
  },
  methods: {
    checkSubmit(e) {
      e.preventDefault()
      for (let i = 0; i < $('input').length; i++) {
        let target = $('input')[i].id
        if (target == 'phone' && $(`input[id=${target}]`).val().length < 10) {
          $(`input[id=${target}]`)
            .css({ border: '1px solid #E06D6D', 'box-shadow': 'inset 0 0 0 2px #E06D6D' })
            .siblings('#help')
            .text('wrong format')
        }
        for (let k in this.inputValue) {
          if (target == k) {
            if ($(`input[id=${target}]`).val() == '' && $(`input[id=${target}]`).siblings('#help').text() == '') {
              $(`input[id=${target}]`)
                .css({ border: '1px solid #E06D6D', 'box-shadow': 'inset 0 0 0 2px #E06D6D' })
                .siblings('#help')
                .text('required')
              // store input box
              $(`input[id=${target}]`)
                .css({ border: '1px solid #E06D6D', 'box-shadow': 'inset 0 0 0 2px #E06D6D' })
                .parent()
                .siblings('#help')
                .text('required')
            } else {
              if ($(`input[id=${target}]`).siblings('#help').text() == '') {
                $(`input[id=${target}]`).css({ border: '1px solid #204379', 'box-shadow': 'inset 0 0 0 2px transparent' }).siblings('#help').text('')
              }
            }
          }
        }
      }

      if ($('input').siblings('#help').text().trim() == '') {
        this.isSubmit.send = true

        // test if success
        if (this.inputValue.name == 'Apple') {
          this.isSubmit.isOk = true
        } else {
          this.isSubmit.isOk = false
        }
      }
    },
    checkStore() {
      const datas = [...this.storesData].splice(',').join('')

      if (this.inputValue.store.length > 1) {
        if (!datas.includes(this.inputValue.store)) {
          this.results = []
          $('input[id=store]')
            .css({ border: '1px solid #E06D6D', 'box-shadow': 'inset 0 0 0 2px #E06D6D' })
            .parent()
            .siblings('#help')
            .text('no result')
          this.isShow = false
        } else {
          this.isShow = true
          $('input[id=store]').css({ border: '1px solid #204379', 'box-shadow': 'inset 0 0 0 2px transparent' })
          for (let i = 0; i < this.storesData.length; i++) {
            this.$set(this.results, i, `${this.storesData[i]}`)
          }
        }
      } else {
        $('input[id=store]').parent().siblings('#help').text('')
        this.isShow = false
      }
    },
    setStore(val) {
      this.inputValue.store = val
      this.isShow = false
    },
  },
}
</script>

<style lang="scss" src="@/assets/css/components/formTemplete.scss" scoped></style>
