import React, { useState } from 'react';
import { WaveGen } from '../components/WaveGen';
import { BrandName } from '../../../tokens/designTokens';
import {
  WaveMode,
  WaveType,
  FillMode,
  EasingFunction,
  BlendMode,
  WaveLayer,
} from '../types/waveTypes';
import { getFormulaString } from '../utils/waveFormulas';

type TabType = 'mode' | 'shape' | 'styling' | 'animation' | 'distortion' | 'layers' | 'effects';

interface ConfigState {
  // Basic props
  amplitude: number;
  colors: string[];
  height: string;
  backgroundColor: string;
  backgroundGradient: string;
  position: 'top' | 'bottom';
  opacity: number;
  brand: BrandName;
  theme: 'light' | 'dark';

  // Mode
  mode: WaveMode;

  // Advanced props
  waveType: WaveType;
  strokeWidth: number;
  speed: number;
  points: number;
  frequency: number;
  phaseShift: number;
  fillMode: FillMode;
  strokeDashArray: string;
  mirror: boolean;
  gradientAngle: number;

  // Animation effects
  flickerEnabled: boolean;
  flickerSpeed: number;
  flickerIntensity: number;
  pulsateEnabled: boolean;
  pulsateSpeed: number;
  pulsateRangeMin: number;
  pulsateRangeMax: number;
  reverse: boolean;
  easing: EasingFunction;

  // Distortion
  turbulence: number;
  amplitudeVariation: number;
  frequencyModulation: number;

  // Layers
  layers: WaveLayer[];

  // Effects
  blendMode: BlendMode;
  glowEnabled: boolean;
  glowBlur: number;
  glowColor: string;
  shadowEnabled: boolean;
  shadowOffsetX: number;
  shadowOffsetY: number;
  shadowBlur: number;
  shadowColor: string;
  showFormula: boolean;
}

const EnhancedWaveGenDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('mode');
  const [config, setConfig] = useState<ConfigState>({
    amplitude: 40,
    colors: ['#FF6AC6', '#436EDB', '#FF6AC6'],
    height: '300px',
    backgroundColor: '',
    backgroundGradient: '',
    position: 'bottom',
    opacity: 1,
    brand: 'iqos',
    theme: 'light',
    mode: 'simple',
    waveType: 'sine',
    strokeWidth: 2,
    speed: 0.3,
    points: 100,
    frequency: 2,
    phaseShift: 0,
    fillMode: 'fill',
    strokeDashArray: '',
    mirror: false,
    gradientAngle: 0,
    flickerEnabled: false,
    flickerSpeed: 1,
    flickerIntensity: 0.3,
    pulsateEnabled: false,
    pulsateSpeed: 1,
    pulsateRangeMin: 0.8,
    pulsateRangeMax: 1.2,
    reverse: false,
    easing: 'linear',
    turbulence: 0,
    amplitudeVariation: 0,
    frequencyModulation: 0,
    layers: [],
    blendMode: 'normal',
    glowEnabled: false,
    glowBlur: 10,
    glowColor: '#FF6AC6',
    shadowEnabled: false,
    shadowOffsetX: 2,
    shadowOffsetY: 2,
    shadowBlur: 4,
    shadowColor: 'rgba(0,0,0,0.3)',
    showFormula: true,
  });

  const [newColor, setNewColor] = useState('#FF6AC6');

  const addColor = () => {
    setConfig(prev => ({
      ...prev,
      colors: [...prev.colors, newColor]
    }));
  };

  const removeColor = (index: number) => {
    setConfig(prev => ({
      ...prev,
      colors: prev.colors.filter((_, i) => i !== index)
    }));
  };

  const updateColor = (index: number, color: string) => {
    setConfig(prev => ({
      ...prev,
      colors: prev.colors.map((c, i) => i === index ? color : c)
    }));
  };

  const addLayer = () => {
    setConfig(prev => ({
      ...prev,
      layers: [...prev.layers, {
        amplitude: 20,
        frequency: 1.5,
        phase: 0,
        opacity: 0.5,
        color: prev.colors[0] || '#FF6AC6',
        speed: 0.5,
        strokeWidth: 2,
      }]
    }));
  };

  const removeLayer = (index: number) => {
    setConfig(prev => ({
      ...prev,
      layers: prev.layers.filter((_, i) => i !== index)
    }));
  };

  const updateLayer = (index: number, updates: Partial<WaveLayer>) => {
    setConfig(prev => ({
      ...prev,
      layers: prev.layers.map((layer, i) =>
        i === index ? { ...layer, ...updates } : layer
      )
    }));
  };

  const tabs: { id: TabType; label: string }[] = [
    { id: 'mode', label: 'Mode' },
    { id: 'shape', label: 'Wave Shape' },
    { id: 'styling', label: 'Styling' },
    { id: 'animation', label: 'Animation' },
    { id: 'distortion', label: 'Distortion' },
    { id: 'layers', label: 'Layers' },
    { id: 'effects', label: 'Effects' },
  ];

  const tabStyle = (tabId: TabType) => ({
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: activeTab === tabId ? '#007bff' : '#f0f0f0',
    color: activeTab === tabId ? 'white' : '#333',
    border: 'none',
    borderBottom: activeTab === tabId ? '3px solid #0056b3' : '1px solid #ddd',
    fontWeight: activeTab === tabId ? 'bold' : 'normal',
  });

  const renderTabContent = () => {
    switch (activeTab) {
      case 'mode':
        return (
          <div>
            <h4>Rendering Mode</h4>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  type="radio"
                  value="simple"
                  checked={config.mode === 'simple'}
                  onChange={(e) => setConfig(prev => ({ ...prev, mode: e.target.value as WaveMode }))}
                  style={{ marginRight: '8px' }}
                />
                Simple Mode (react-animated-waves)
              </label>
              <p style={{ marginLeft: '26px', fontSize: '14px', color: '#666' }}>
                Basic animated waves with amplitude and colors only
              </p>

              <label style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
                <input
                  type="radio"
                  value="advanced"
                  checked={config.mode === 'advanced'}
                  onChange={(e) => setConfig(prev => ({ ...prev, mode: e.target.value as WaveMode }))}
                  style={{ marginRight: '8px' }}
                />
                Advanced Mode (Custom SVG Engine)
              </label>
              <p style={{ marginLeft: '26px', fontSize: '14px', color: '#666' }}>
                Full control with 20+ customization options, effects, and layering
              </p>
            </div>

            {config.mode === 'advanced' && (
              <div style={{ padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '4px', marginTop: '20px' }}>
                <strong>Advanced Features Enabled:</strong>
                <ul style={{ marginTop: '10px', marginBottom: 0 }}>
                  <li>Multiple wave types (sine, cosine, layered, organic)</li>
                  <li>Stroke width, speed, frequency control</li>
                  <li>Fill/stroke modes and gradients</li>
                  <li>Animation effects (flicker, pulsate)</li>
                  <li>Distortion (turbulence, variation, modulation)</li>
                  <li>Multi-layer wave stacking</li>
                  <li>Visual effects (glow, shadow, blend modes)</li>
                </ul>
              </div>
            )}
          </div>
        );

      case 'shape':
        return (
          <div>
            <h4>Wave Shape & Motion</h4>

            {config.mode === 'advanced' && (
              <>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Wave Type:</label>
                  <select
                    value={config.waveType}
                    onChange={(e) => setConfig(prev => ({ ...prev, waveType: e.target.value as WaveType }))}
                    style={{ width: '100%', padding: '8px' }}
                  >
                    <option value="sine">Sine Wave</option>
                    <option value="cosine">Cosine Wave</option>
                    <option value="layered">Layered Waves</option>
                    <option value="organic">Organic Wave</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Frequency (peaks per wavelength): {config.frequency}</label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="0.1"
                    value={config.frequency}
                    onChange={(e) => setConfig(prev => ({ ...prev, frequency: parseFloat(e.target.value) }))}
                    style={{ width: '100%' }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Phase Shift (degrees): {config.phaseShift}</label>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={config.phaseShift}
                    onChange={(e) => setConfig(prev => ({ ...prev, phaseShift: parseInt(e.target.value) }))}
                    style={{ width: '100%' }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Points (path resolution): {config.points}</label>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="10"
                    value={config.points}
                    onChange={(e) => setConfig(prev => ({ ...prev, points: parseInt(e.target.value) }))}
                    style={{ width: '100%' }}
                  />
                </div>
              </>
            )}

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Amplitude (wave height): {config.amplitude}</label>
              <input
                type="range"
                min="10"
                max="100"
                value={config.amplitude}
                onChange={(e) => setConfig(prev => ({ ...prev, amplitude: parseInt(e.target.value) }))}
                style={{ width: '100%' }}
              />
            </div>

            {config.mode === 'advanced' && (
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Speed: {config.speed}</label>
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={config.speed}
                  onChange={(e) => setConfig(prev => ({ ...prev, speed: parseFloat(e.target.value) }))}
                  style={{ width: '100%' }}
                />
              </div>
            )}
          </div>
        );

      case 'styling':
        return (
          <div>
            <h4>Visual Styling</h4>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Colors:</label>
              {config.colors.map((color, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => updateColor(index, e.target.value)}
                    style={{ marginRight: '10px' }}
                  />
                  <input
                    type="text"
                    value={color}
                    onChange={(e) => updateColor(index, e.target.value)}
                    style={{ flex: 1, padding: '4px', marginRight: '10px' }}
                  />
                  <button onClick={() => removeColor(index)} style={{ padding: '4px 8px' }}>Remove</button>
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <input
                  type="color"
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                  style={{ marginRight: '10px' }}
                />
                <input
                  type="text"
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                  style={{ flex: 1, padding: '4px', marginRight: '10px' }}
                />
                <button onClick={addColor} style={{ padding: '4px 8px' }}>Add Color</button>
              </div>
            </div>

            {config.mode === 'advanced' && (
              <>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Fill Mode:</label>
                  <select
                    value={config.fillMode}
                    onChange={(e) => setConfig(prev => ({ ...prev, fillMode: e.target.value as FillMode }))}
                    style={{ width: '100%', padding: '8px' }}
                  >
                    <option value="fill">Fill Only</option>
                    <option value="stroke">Stroke Only</option>
                    <option value="both">Both Fill & Stroke</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Stroke Width: {config.strokeWidth}px</label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={config.strokeWidth}
                    onChange={(e) => setConfig(prev => ({ ...prev, strokeWidth: parseInt(e.target.value) }))}
                    style={{ width: '100%' }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Stroke Dash Array:</label>
                  <input
                    type="text"
                    value={config.strokeDashArray}
                    onChange={(e) => setConfig(prev => ({ ...prev, strokeDashArray: e.target.value }))}
                    placeholder="e.g., 5,5 or 10,5,2,5"
                    style={{ width: '100%', padding: '8px' }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Gradient Angle: {config.gradientAngle}°</label>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={config.gradientAngle}
                    onChange={(e) => setConfig(prev => ({ ...prev, gradientAngle: parseInt(e.target.value) }))}
                    style={{ width: '100%' }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      checked={config.mirror}
                      onChange={(e) => setConfig(prev => ({ ...prev, mirror: e.target.checked }))}
                      style={{ marginRight: '8px' }}
                    />
                    Mirror Effect (vertical reflection)
                  </label>
                </div>
              </>
            )}
          </div>
        );

      case 'animation':
        return (
          <div>
            <h4>Animation Effects</h4>

            {config.mode === 'advanced' && (
              <>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <input
                      type="checkbox"
                      checked={config.flickerEnabled}
                      onChange={(e) => setConfig(prev => ({ ...prev, flickerEnabled: e.target.checked }))}
                      style={{ marginRight: '8px' }}
                    />
                    <strong>Flicker Effect</strong>
                  </label>
                  {config.flickerEnabled && (
                    <>
                      <div style={{ marginLeft: '26px', marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Speed: {config.flickerSpeed}</label>
                        <input
                          type="range"
                          min="0.1"
                          max="2"
                          step="0.1"
                          value={config.flickerSpeed}
                          onChange={(e) => setConfig(prev => ({ ...prev, flickerSpeed: parseFloat(e.target.value) }))}
                          style={{ width: '100%' }}
                        />
                      </div>
                      <div style={{ marginLeft: '26px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Intensity: {config.flickerIntensity}</label>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={config.flickerIntensity}
                          onChange={(e) => setConfig(prev => ({ ...prev, flickerIntensity: parseFloat(e.target.value) }))}
                          style={{ width: '100%' }}
                        />
                      </div>
                    </>
                  )}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <input
                      type="checkbox"
                      checked={config.pulsateEnabled}
                      onChange={(e) => setConfig(prev => ({ ...prev, pulsateEnabled: e.target.checked }))}
                      style={{ marginRight: '8px' }}
                    />
                    <strong>Pulsate Effect</strong>
                  </label>
                  {config.pulsateEnabled && (
                    <>
                      <div style={{ marginLeft: '26px', marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Speed: {config.pulsateSpeed}</label>
                        <input
                          type="range"
                          min="0.1"
                          max="2"
                          step="0.1"
                          value={config.pulsateSpeed}
                          onChange={(e) => setConfig(prev => ({ ...prev, pulsateSpeed: parseFloat(e.target.value) }))}
                          style={{ width: '100%' }}
                        />
                      </div>
                      <div style={{ marginLeft: '26px', marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Min Range: {config.pulsateRangeMin}</label>
                        <input
                          type="range"
                          min="0.5"
                          max="1"
                          step="0.1"
                          value={config.pulsateRangeMin}
                          onChange={(e) => setConfig(prev => ({ ...prev, pulsateRangeMin: parseFloat(e.target.value) }))}
                          style={{ width: '100%' }}
                        />
                      </div>
                      <div style={{ marginLeft: '26px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Max Range: {config.pulsateRangeMax}</label>
                        <input
                          type="range"
                          min="1"
                          max="2"
                          step="0.1"
                          value={config.pulsateRangeMax}
                          onChange={(e) => setConfig(prev => ({ ...prev, pulsateRangeMax: parseFloat(e.target.value) }))}
                          style={{ width: '100%' }}
                        />
                      </div>
                    </>
                  )}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      checked={config.reverse}
                      onChange={(e) => setConfig(prev => ({ ...prev, reverse: e.target.checked }))}
                      style={{ marginRight: '8px' }}
                    />
                    Reverse Direction
                  </label>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Easing Function:</label>
                  <select
                    value={config.easing}
                    onChange={(e) => setConfig(prev => ({ ...prev, easing: e.target.value as EasingFunction }))}
                    style={{ width: '100%', padding: '8px' }}
                  >
                    <option value="linear">Linear</option>
                    <option value="ease-in-out">Ease In-Out</option>
                    <option value="elastic">Elastic</option>
                    <option value="bounce">Bounce</option>
                  </select>
                </div>
              </>
            )}
          </div>
        );

      case 'distortion':
        return (
          <div>
            <h4>Distortion Effects</h4>

            {config.mode === 'advanced' ? (
              <>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Turbulence (noise): {config.turbulence.toFixed(2)}</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={config.turbulence}
                    onChange={(e) => setConfig(prev => ({ ...prev, turbulence: parseFloat(e.target.value) }))}
                    style={{ width: '100%' }}
                  />
                  <small style={{ color: '#666' }}>Adds random noise to wave path</small>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Amplitude Variation: {config.amplitudeVariation.toFixed(2)}</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={config.amplitudeVariation}
                    onChange={(e) => setConfig(prev => ({ ...prev, amplitudeVariation: parseFloat(e.target.value) }))}
                    style={{ width: '100%' }}
                  />
                  <small style={{ color: '#666' }}>Wave height oscillation (breathing effect)</small>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Frequency Modulation: {config.frequencyModulation.toFixed(2)}</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={config.frequencyModulation}
                    onChange={(e) => setConfig(prev => ({ ...prev, frequencyModulation: parseFloat(e.target.value) }))}
                    style={{ width: '100%' }}
                  />
                  <small style={{ color: '#666' }}>Wavelength variation over time</small>
                </div>
              </>
            ) : (
              <p style={{ color: '#666', fontStyle: 'italic' }}>
                Distortion effects are only available in Advanced Mode
              </p>
            )}
          </div>
        );

      case 'layers':
        return (
          <div>
            <h4>Layer Management</h4>

            {config.mode === 'advanced' ? (
              <>
                <p style={{ marginBottom: '15px', color: '#666' }}>
                  Stack multiple waves with different properties for complex patterns
                </p>

                <button
                  onClick={addLayer}
                  style={{ marginBottom: '20px', padding: '8px 16px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Add Layer
                </button>

                {config.layers.length === 0 ? (
                  <p style={{ color: '#999', fontStyle: 'italic' }}>No layers added yet</p>
                ) : (
                  config.layers.map((layer, index) => (
                    <div key={index} style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '15px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <strong>Layer {index + 1}</strong>
                        <button
                          onClick={() => removeLayer(index)}
                          style={{ padding: '4px 8px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                        >
                          Remove
                        </button>
                      </div>

                      <div style={{ marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px' }}>Amplitude: {layer.amplitude}</label>
                        <input
                          type="range"
                          min="10"
                          max="60"
                          value={layer.amplitude}
                          onChange={(e) => updateLayer(index, { amplitude: parseInt(e.target.value) })}
                          style={{ width: '100%' }}
                        />
                      </div>

                      <div style={{ marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px' }}>Frequency: {layer.frequency}</label>
                        <input
                          type="range"
                          min="0.5"
                          max="5"
                          step="0.1"
                          value={layer.frequency}
                          onChange={(e) => updateLayer(index, { frequency: parseFloat(e.target.value) })}
                          style={{ width: '100%' }}
                        />
                      </div>

                      <div style={{ marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px' }}>Speed: {layer.speed}</label>
                        <input
                          type="range"
                          min="0.1"
                          max="2"
                          step="0.1"
                          value={layer.speed}
                          onChange={(e) => updateLayer(index, { speed: parseFloat(e.target.value) })}
                          style={{ width: '100%' }}
                        />
                      </div>

                      <div style={{ marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px' }}>Opacity: {layer.opacity}</label>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={layer.opacity}
                          onChange={(e) => updateLayer(index, { opacity: parseFloat(e.target.value) })}
                          style={{ width: '100%' }}
                        />
                      </div>

                      <div style={{ marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px' }}>Color:</label>
                        <input
                          type="color"
                          value={layer.color}
                          onChange={(e) => updateLayer(index, { color: e.target.value })}
                          style={{ width: '100%', height: '40px' }}
                        />
                      </div>
                    </div>
                  ))
                )}
              </>
            ) : (
              <p style={{ color: '#666', fontStyle: 'italic' }}>
                Layer stacking is only available in Advanced Mode
              </p>
            )}
          </div>
        );

      case 'effects':
        return (
          <div>
            <h4>Visual Effects</h4>

            {config.mode === 'advanced' ? (
              <>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Blend Mode:</label>
                  <select
                    value={config.blendMode}
                    onChange={(e) => setConfig(prev => ({ ...prev, blendMode: e.target.value as BlendMode }))}
                    style={{ width: '100%', padding: '8px' }}
                  >
                    <option value="normal">Normal</option>
                    <option value="multiply">Multiply</option>
                    <option value="screen">Screen</option>
                    <option value="overlay">Overlay</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <input
                      type="checkbox"
                      checked={config.glowEnabled}
                      onChange={(e) => setConfig(prev => ({ ...prev, glowEnabled: e.target.checked }))}
                      style={{ marginRight: '8px' }}
                    />
                    <strong>Glow Effect</strong>
                  </label>
                  {config.glowEnabled && (
                    <>
                      <div style={{ marginLeft: '26px', marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Blur: {config.glowBlur}</label>
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={config.glowBlur}
                          onChange={(e) => setConfig(prev => ({ ...prev, glowBlur: parseInt(e.target.value) }))}
                          style={{ width: '100%' }}
                        />
                      </div>
                      <div style={{ marginLeft: '26px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Color:</label>
                        <input
                          type="color"
                          value={config.glowColor}
                          onChange={(e) => setConfig(prev => ({ ...prev, glowColor: e.target.value }))}
                          style={{ width: '100%', height: '40px' }}
                        />
                      </div>
                    </>
                  )}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <input
                      type="checkbox"
                      checked={config.shadowEnabled}
                      onChange={(e) => setConfig(prev => ({ ...prev, shadowEnabled: e.target.checked }))}
                      style={{ marginRight: '8px' }}
                    />
                    <strong>Shadow Effect</strong>
                  </label>
                  {config.shadowEnabled && (
                    <>
                      <div style={{ marginLeft: '26px', marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Offset X: {config.shadowOffsetX}</label>
                        <input
                          type="range"
                          min="-20"
                          max="20"
                          value={config.shadowOffsetX}
                          onChange={(e) => setConfig(prev => ({ ...prev, shadowOffsetX: parseInt(e.target.value) }))}
                          style={{ width: '100%' }}
                        />
                      </div>
                      <div style={{ marginLeft: '26px', marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Offset Y: {config.shadowOffsetY}</label>
                        <input
                          type="range"
                          min="-20"
                          max="20"
                          value={config.shadowOffsetY}
                          onChange={(e) => setConfig(prev => ({ ...prev, shadowOffsetY: parseInt(e.target.value) }))}
                          style={{ width: '100%' }}
                        />
                      </div>
                      <div style={{ marginLeft: '26px', marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Blur: {config.shadowBlur}</label>
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={config.shadowBlur}
                          onChange={(e) => setConfig(prev => ({ ...prev, shadowBlur: parseInt(e.target.value) }))}
                          style={{ width: '100%' }}
                        />
                      </div>
                    </>
                  )}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      checked={config.showFormula}
                      onChange={(e) => setConfig(prev => ({ ...prev, showFormula: e.target.checked }))}
                      style={{ marginRight: '8px' }}
                    />
                    Show Mathematical Formula
                  </label>
                </div>
              </>
            ) : (
              <p style={{ color: '#666', fontStyle: 'italic' }}>
                Visual effects are only available in Advanced Mode
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const waveGenProps = {
    amplitude: config.amplitude,
    colors: config.colors,
    height: config.height,
    backgroundColor: config.backgroundColor,
    backgroundGradient: config.backgroundGradient,
    position: config.position,
    opacity: config.opacity,
    brand: config.brand,
    theme: config.theme,
    mode: config.mode,
    ...(config.mode === 'advanced' && {
      waveType: config.waveType,
      strokeWidth: config.strokeWidth,
      speed: config.speed,
      points: config.points,
      frequency: config.frequency,
      phaseShift: config.phaseShift,
      fillMode: config.fillMode,
      strokeDashArray: config.strokeDashArray || undefined,
      mirror: config.mirror,
      gradientAngle: config.gradientAngle,
      flicker: {
        enabled: config.flickerEnabled,
        speed: config.flickerSpeed,
        intensity: config.flickerIntensity,
      },
      pulsate: {
        enabled: config.pulsateEnabled,
        speed: config.pulsateSpeed,
        range: [config.pulsateRangeMin, config.pulsateRangeMax] as [number, number],
      },
      reverse: config.reverse,
      easing: config.easing,
      turbulence: config.turbulence,
      amplitudeVariation: config.amplitudeVariation,
      frequencyModulation: config.frequencyModulation,
      layers: config.layers,
      blendMode: config.blendMode,
      glow: {
        enabled: config.glowEnabled,
        blur: config.glowBlur,
        color: config.glowColor,
      },
      shadow: {
        enabled: config.shadowEnabled,
        offset: [config.shadowOffsetX, config.shadowOffsetY] as [number, number],
        blur: config.shadowBlur,
        color: config.shadowColor,
      },
      showFormula: config.showFormula,
    }),
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>AEM Snippets - Enhanced WaveGen</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
        {config.mode === 'simple' ? 'Simple Mode: Basic wave animation' : 'Advanced Mode: Full customization with 20+ options'}
      </p>

      {/* Wave Preview */}
      <div style={{ marginBottom: '40px', border: '2px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
        <WaveGen {...waveGenProps} />
      </div>

      {/* Formula Display (if in advanced mode) */}
      {config.mode === 'advanced' && config.showFormula && (
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px', textAlign: 'center' }}>
          <strong>Mathematical Formula:</strong> {getFormulaString(config.waveType, config.amplitude, config.frequency, config.layers)}
        </div>
      )}

      {/* Tabs */}
      <div style={{ borderBottom: '1px solid #ddd', marginBottom: '20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={tabStyle(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div style={{ minHeight: '400px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default EnhancedWaveGenDemo;
