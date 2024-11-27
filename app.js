// Componente: Convertidor de Unidades
Vue.component('unit-converter', {
  data() {
    return {
      value: 0,
      unitFrom: 'meters',
      unitTo: 'centimeters',
      result: null
    };
  },
  methods: {
    convert() {
      const factors = {
        meters: 1,
        centimeters: 100,
        inches: 39.37,
        feet: 3.281
      };
      this.result = (this.value * factors[this.unitTo]) / factors[this.unitFrom];
    }
  },
  template: `
    <div>
      <div class="mb-3">
        <label for="value" class="form-label">Valor</label>
        <input v-model.number="value" id="value" type="number" class="form-control" placeholder="Ingresa un valor" />
      </div>
      <div class="mb-3">
        <label for="unitFrom" class="form-label">Convertir de:</label>
        <select v-model="unitFrom" id="unitFrom" class="form-select">
          <option value="meters">Metros</option>
          <option value="centimeters">Centímetros</option>
          <option value="inches">Pulgadas</option>
          <option value="feet">Pies</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="unitTo" class="form-label">Convertir a:</label>
        <select v-model="unitTo" id="unitTo" class="form-select">
          <option value="meters">Metros</option>
          <option value="centimeters">Centímetros</option>
          <option value="inches">Pulgadas</option>
          <option value="feet">Pies</option>
        </select>
      </div>
      <button @click="convert" class="btn btn-primary w-100">Convertir</button>
      <p class="mt-3 text-center">Resultado: <strong>{{ result !== null ? result.toFixed(2) : '' }}</strong></p>
    </div>
  `
});

// Componente: Calculadora de Áreas
Vue.component('area-calculator', {
  data() {
    return {
      shape: 'circle',
      dimensions: { radius: 0, base: 0, height: 0, length: 0, width: 0 },
      area: null
    };
  },
  methods: {
    calculateArea() {
      if (this.shape === 'circle') {
        this.area = Math.PI * Math.pow(this.dimensions.radius, 2);
      } else if (this.shape === 'rectangle') {
        this.area = this.dimensions.length * this.dimensions.width;
      } else if (this.shape === 'triangle') {
        this.area = 0.5 * this.dimensions.base * this.dimensions.height;
      }
    }
  },
  template: `
    <div>
      <div class="mb-3">
        <label for="shape" class="form-label">Figura</label>
        <select v-model="shape" id="shape" class="form-select">
          <option value="circle">Círculo</option>
          <option value="rectangle">Rectángulo</option>
          <option value="triangle">Triángulo</option>
        </select>
      </div>
      <div v-if="shape === 'circle'" class="mb-3">
        <label for="radius" class="form-label">Radio</label>
        <input v-model.number="dimensions.radius" id="radius" type="number" class="form-control" />
      </div>
      <div v-if="shape === 'rectangle'" class="mb-3">
        <label for="length" class="form-label">Largo</label>
        <input v-model.number="dimensions.length" id="length" type="number" class="form-control" />
        <label for="width" class="form-label mt-2">Ancho</label>
        <input v-model.number="dimensions.width" id="width" type="number" class="form-control" />
      </div>
      <div v-if="shape === 'triangle'" class="mb-3">
        <label for="base" class="form-label">Base</label>
        <input v-model.number="dimensions.base" id="base" type="number" class="form-control" />
        <label for="height" class="form-label mt-2">Altura</label>
        <input v-model.number="dimensions.height" id="height" type="number" class="form-control" />
      </div>
      <button @click="calculateArea" class="btn btn-primary w-100">Calcular Área</button>
      <p class="mt-3 text-center">Área: <strong>{{ area !== null ? area.toFixed(2) : '' }}</strong></p>
    </div>
  `
});

// Instancia Vue
new Vue({
  el: '#app'
});
