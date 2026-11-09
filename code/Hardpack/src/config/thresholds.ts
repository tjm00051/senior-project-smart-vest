// App copy of the agreed thresholds (°F). Keep in sync with the firmware's config/thresholds.json.
export const THRESHOLDS = {
  defaultTargetF: 92,
  minTargetF: 85,
  maxTargetF: 102,
  heaterOnBelowTargetF: 2,
  safetyCutoffF: 109,
  safetyResumeF: 100,
  batteryWarningPct: 20,
  batteryCriticalPct: 10,
  heartRateValid: [30, 220] as const,
  spo2Valid: [70, 100] as const,
  /** Anything outside this is a bad reading (e.g. TMP117 power-on value -256 °C = -428.8 °F) */
  skinTempValidF: [40, 130] as const,
  manualModeMinutes: 15,
}

export function inRange(value: number | null | undefined, [lo, hi]: readonly [number, number]) {
  return value != null && Number.isFinite(value) && value >= lo && value <= hi
}

/** Returns the value only if it's a believable reading, otherwise null. */
export function validOrNull(value: number | null | undefined, range: readonly [number, number]) {
  return inRange(value, range) ? (value as number) : null
}
