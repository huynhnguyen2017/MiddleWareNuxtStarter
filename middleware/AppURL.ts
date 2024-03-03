import { useDataStore } from "~/store/data";

export default function ({ req }) {
    const dataStore = useDataStore();
    
    dataStore.baseURL = req?.headers['x-host-filter']
}