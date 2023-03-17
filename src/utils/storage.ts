import AsyncStorage from '@react-native-async-storage/async-storage';

export async function save(key: string, value: any): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export async function load(key: string): Promise<any | null> {
  try {
    const almostThere = await AsyncStorage.getItem(key);
    return almostThere ? JSON.parse(almostThere) : null;
  } catch {
    return null;
  }
}

export async function remove(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch {}
}

export async function clear(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch {}
}
