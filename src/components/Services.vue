<template>
  <DataTable
    :value="services"
    :lazy="true"
    :loading="dataStore.loading"
    :paginator="true"
    :rows="perpage"
    :rowsPerPageOptions="[2, 5, 10]"
    :totalRecords=services_total
    @page="onPageChange"
    responsive-layot="scroll"
    :laading="true"
    :first="offset"
  >
    <Column field="id" header="№"/>
    <Column field="name" header="Наименование услуги"/>
  </DataTable>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import {useDataStore} from '@/stores/dataStore';

export default {
  name: "Services",
  components: {DataTable, Column},
  data() {
    return {
      dataStore: useDataStore(),
      perpage: 5,
      offset: 0,
    }
  },
  computed: {
    services() {
      return this.dataStore.services;
    },
    services_total() {
      return this.dataStore.services_total;
    }
  },
  mounted() {
    console.log('Services component MOUNTED!');
    this.dataStore.get_services();
    this.dataStore.get_services_total();
    console.log('Services=', this.services);
  },
  methods: {
    onPageChange(event) {
      this.offset = event.first;
      this.perpage = event.rows;
      this.dataStore.get_services(this.offset / this.perpage, this.perpage);
    }
  }
}
</script>
<style scoped>

</style>
